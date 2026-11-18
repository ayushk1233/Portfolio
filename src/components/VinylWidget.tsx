"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Disc3,
  Pause,
  Play,
  RotateCcw,
  Shuffle,
  X,
} from "lucide-react";
import { getDailyTrackIndex, VINYL_TRACKS } from "@/data/songs";

export function VinylWidget() {
  const [dailyIdx, setDailyIdx] = useState<number>(0);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [dateLabel, setDateLabel] = useState<string>("DAILY SPIN");
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const now = new Date();
    const todayIdx = getDailyTrackIndex(now);
    setDailyIdx(todayIdx);
    setActiveIdx(todayIdx);
    setDateLabel(
      now
        .toLocaleDateString("en-US", { month: "short", day: "numeric" })
        .toUpperCase()
    );
  }, []);

  const track = VINYL_TRACKS[activeIdx] ?? VINYL_TRACKS[0];
  const isTodaysPick = activeIdx === dailyIdx;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setAudioError(false);
  }, [activeIdx]);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expanded]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || !track.previewUrl) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    try {
      setAudioError(false);
      await audio.play();
      setIsPlaying(true);
    } catch {
      setAudioError(true);
      setIsPlaying(false);
    }
  };

  const handleShuffle = () => {
    let next = Math.floor(Math.random() * VINYL_TRACKS.length);
    if (next === activeIdx) {
      next = (activeIdx + 1) % VINYL_TRACKS.length;
    }
    setActiveIdx(next);
  };

  const query = encodeURIComponent(`${track.title} ${track.primaryArtist}`);
  const spotifyUrl = `https://open.spotify.com/search/${query}`;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`;

  return (
    <aside
      aria-label="Daily vinyl song recommendation"
      className="fixed right-3 bottom-3 z-40 flex flex-col items-end gap-2.5 sm:right-5 sm:bottom-5"
    >
      {/* Hidden audio element for 30s track preview */}
      <audio
        ref={audioRef}
        src={track.previewUrl || undefined}
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setAudioError(true);
        }}
      />

      {/* Expanded Vinyl Deck Panel */}
      {expanded ? (
        <div
          role="dialog"
          aria-label="Song of the Day vinyl player"
          className="w-[306px] border border-flame bg-ink text-bg shadow-[5px_5px_0_0_#FF4D1A] sm:w-[344px]"
        >
          {/* Top deck bar */}
          <div className="flex items-center justify-between border-b border-white/15 bg-black/50 px-3.5 py-2.5 font-mono text-[10px]">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 bg-flame"
                aria-hidden="true"
              />
              <span className="font-semibold tracking-[0.14em] text-flame uppercase">
                {isTodaysPick ? "SONG OF THE DAY" : "VAULT SPIN"}
              </span>
              <span className="text-bg/50">·</span>
              <span className="text-bg/75">{dateLabel}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-bg/55">
                #{String(track.id).padStart(3, "0")}/{VINYL_TRACKS.length}
              </span>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Collapse vinyl player"
                className="inline-flex h-6 w-6 items-center justify-center border border-white/25 text-bg transition-colors duration-150 hover:border-flame hover:bg-flame hover:text-ink"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Turntable & Track Info */}
          <div className="flex items-center gap-4 p-4">
            {/* Spinning black vinyl disc with real album cover label + tonearm */}
            <div className="relative h-[106px] w-[106px] shrink-0">
              <div
                className={`vinyl-grooves animate-vinyl-spin relative flex h-full w-full items-center justify-center rounded-full border-2 border-flame/75 shadow-[0_0_24px_rgba(255,77,26,0.22)] ${
                  isPlaying ? "" : "vinyl-paused"
                }`}
              >
                {/* Album cover center label */}
                <div className="relative h-[48px] w-[48px] overflow-hidden rounded-full border border-flame/80 bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={track.coverUrl}
                    alt={`${track.album} album cover`}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* Center spindle hole */}
                  <span
                    className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-flame bg-ink"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Minimal SVG tonearm pivoting onto the record when playing */}
              <svg
                viewBox="0 0 40 76"
                className={`pointer-events-none absolute -top-1 -right-2 h-16 w-9 origin-[28px_10px] transition-transform duration-300 ${
                  isPlaying ? "rotate-[18deg]" : "rotate-0"
                }`}
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="28"
                  cy="10"
                  r="6"
                  fill="#292929"
                  stroke="#FF4D1A"
                  strokeWidth="1.5"
                />
                <path
                  d="M28 16 L24 54 L14 64"
                  stroke="#EFEFEA"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <rect
                  x="9"
                  y="60"
                  width="8"
                  height="11"
                  transform="rotate(36 13 65)"
                  fill="#FF4D1A"
                  stroke="#171717"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Metadata */}
            <div className="min-w-0 flex-1">
              <span className="inline-block border border-flame/50 bg-flame/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-flame uppercase">
                {track.primaryArtist}
              </span>
              <h3 className="mt-2 line-clamp-2 text-sm leading-snug font-bold text-bg">
                {track.title}
              </h3>
              <p className="mt-1 truncate font-mono text-[11px] text-bg/75">
                {track.artist}
              </p>
              <p className="mt-1 truncate font-mono text-[10px] text-bg/50">
                {track.album} · {track.year}
              </p>
              {audioError ? (
                <p className="mt-1 font-mono text-[9px] text-flame">
                  Preview unavailable — open full track below.
                </p>
              ) : null}
            </div>
          </div>

          {/* Playback & Shuffle Controls */}
          <div className="grid grid-cols-12 border-t border-white/15 font-mono text-[11px]">
            <button
              type="button"
              onClick={togglePlay}
              disabled={!track.previewUrl}
              className={`col-span-6 flex items-center justify-center gap-1.5 border-r border-white/15 py-2.5 font-semibold tracking-wider uppercase transition-colors duration-150 ${
                isPlaying
                  ? "bg-flame text-ink"
                  : "bg-ink text-bg hover:bg-flame hover:text-ink disabled:opacity-40"
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>30s Preview</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleShuffle}
              className={`flex items-center justify-center gap-1.5 py-2.5 font-medium text-bg/85 transition-colors duration-150 hover:bg-lime hover:text-ink ${
                isTodaysPick ? "col-span-6" : "col-span-4 border-r border-white/15"
              }`}
              title="Spin a random song from the 172-track vault"
            >
              <Shuffle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Spin</span>
            </button>

            {!isTodaysPick ? (
              <button
                type="button"
                onClick={() => setActiveIdx(dailyIdx)}
                className="col-span-2 flex items-center justify-center bg-black/40 py-2.5 text-flame transition-colors duration-150 hover:bg-flame hover:text-ink"
                title="Back to Today's Pick"
                aria-label="Back to Today's Pick"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          {/* Listen on Spotify / YouTube */}
          <div className="grid grid-cols-2 border-t border-white/15 bg-black/40 font-mono text-[10px] tracking-wider uppercase">
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 border-r border-white/15 py-2 text-bg/80 transition-colors duration-150 hover:bg-lime hover:text-ink"
            >
              <span>Spotify</span>
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 py-2 text-bg/80 transition-colors duration-150 hover:bg-flame hover:text-ink"
            >
              <span>YouTube</span>
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}

      {/* Floating Compact Black Vinyl Pill (flares Spicy/Flame Orange on hover) */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label={`Daily song recommendation: ${track.title} by ${track.artist}. Click to ${expanded ? "close" : "open"} vinyl player.`}
        className={`group flex max-w-[260px] items-center gap-3 border bg-ink px-2.5 py-2 text-left text-bg transition-all duration-200 hover:-translate-y-0.5 hover:border-flame hover:shadow-[4px_4px_0_0_#FF4D1A] ${
          expanded || isPlaying
            ? "border-flame shadow-[4px_4px_0_0_#FF4D1A]"
            : "border-border shadow-[3px_3px_0_0_#292929]"
        }`}
      >
        {/* Mini Spinning Black Vinyl Disc */}
        <span
          className={`vinyl-grooves animate-vinyl-spin-slow relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200 group-hover:border-flame group-hover:shadow-[0_0_16px_rgba(255,77,26,0.55)] ${
            isPlaying
              ? "border-flame shadow-[0_0_14px_rgba(255,77,26,0.5)]"
              : "border-white/20"
          }`}
        >
          <span className="relative h-5 w-5 overflow-hidden rounded-full border border-flame/70 bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={track.coverUrl}
              alt=""
              width={20}
              height={20}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink ring-1 ring-flame" />
          </span>
        </span>

        {/* Compact Label */}
        <span className="min-w-0 flex-1 pr-1">
          <span className="flex items-center gap-1.5 font-mono text-[9px] font-semibold tracking-[0.14em] uppercase">
            <span
              className={`inline-block h-1.5 w-1.5 transition-colors duration-200 ${
                isPlaying || expanded
                  ? "bg-flame"
                  : "bg-lime group-hover:bg-flame"
              }`}
              aria-hidden="true"
            />
            <span className="text-bg/70 transition-colors duration-200 group-hover:text-flame">
              {isPlaying ? "NOW SPINNING" : "DAILY VINYL"}
            </span>
          </span>
          <span className="mt-0.5 block truncate font-sans text-xs font-semibold text-bg">
            {track.title}
          </span>
          <span className="block truncate font-mono text-[10px] text-bg/65 transition-colors duration-200 group-hover:text-flame/90">
            {track.primaryArtist}
          </span>
        </span>

        <Disc3
          className="h-4 w-4 shrink-0 text-bg/50 transition-colors duration-200 group-hover:text-flame"
          aria-hidden="true"
        />
      </button>
    </aside>
  );
}
