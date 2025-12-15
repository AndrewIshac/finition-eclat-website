# Fonts Folder

## How to Add Clarendon Black Bold Font

1. **If you have the Clarendon font files:**
   - Place the font files in this folder with these names:
     - `Clarendon-Black-Bold.woff2` (preferred)
     - `Clarendon-Black-Bold.woff`
     - `Clarendon-Black-Bold.ttf` or `Clarendon-Black-Bold.otf`

2. **If you don't have Clarendon, use Libre Clarendon (free alternative):**
   - Download from: https://www.deefont.com/libre-clarendon-font-family/
   - Rename the bold file to: `LibreClarendon-Bold.woff2` (or .woff, .ttf)
   - Place it in this folder
   - Uncomment the Libre Clarendon @font-face section in `src/styles/title-font.css`

3. **Font file formats (in order of preference):**
   - `.woff2` - Best compression, modern browsers
   - `.woff` - Good compression, wide support
   - `.ttf` or `.otf` - Fallback for older browsers

## Note:
Make sure you have the proper license to use Clarendon font for commercial purposes if this is a commercial website.



