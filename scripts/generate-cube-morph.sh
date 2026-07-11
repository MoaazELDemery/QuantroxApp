#!/bin/zsh
# Cube → QuantorX logo metamorphosis film (start/end-frame guided).
# Requires ~23 Higgsfield credits (Seedance 2.0, 5s, 720p).
# Frames live next to this script; regenerate them if the brand changes.
#
# Usage: ./scripts/generate-cube-morph.sh
set -e
cd "$(dirname "$0")"

higgsfield generate create seedance_2_0 \
  --prompt "the glossy obsidian cube smoothly dissolves and reshapes itself into the glowing QuantorX Q logo emblem: the cube's dark glass facets fold inward and reassemble into the flat luminous mark, trails of violet energy during the transformation, pure black background and soft floor reflection maintained throughout, single continuous shot, no cuts, no text" \
  --start-image ./morph-frames/cube-stage.png \
  --end-image ./morph-frames/logo-stage.png \
  --aspect_ratio auto --resolution 720p --duration 5 \
  --generate_audio false --wait --json

# Then encode for scroll-scrubbing:
#   ffmpeg -i <result>.mp4 -an -c:v libx264 -pix_fmt yuv420p -crf 23 -preset slow -g 4 \
#     -movflags +faststart ../public/videos/cube-morph.mp4
