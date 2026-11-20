#!/bin/bash
# Capture screenshots at different mobile widths

BASE_URL="http://localhost:8080/index.html#work"

# Navigate to work section and capture at different widths
for width in 360 390 430; do
  echo "Capturing ${width}px width..."
  google-chrome --headless --disable-gpu \
    --screenshot=mobile-${width}px.png \
    --window-size=${width},800 \
    --virtual-time-budget=2000 \
    "$BASE_URL" 2>/dev/null
  
  if [ -f "mobile-${width}px.png" ]; then
    echo "✓ Captured mobile-${width}px.png"
  fi
done

echo "Done capturing screenshots"
ls -lh mobile-*.png 2>/dev/null || echo "No screenshots found"
