import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const projectRoot = resolve(import.meta.dirname, '..')
const pageSource = readFileSync(resolve(projectRoot, 'app/page.tsx'), 'utf8')
const globalStyles = readFileSync(resolve(projectRoot, 'app/globals.css'), 'utf8')
const layoutSource = readFileSync(resolve(projectRoot, 'app/layout.tsx'), 'utf8')

assert.ok(existsSync(resolve(projectRoot, 'assets/image/hero.jpg')), 'the local hero asset must exist')
assert.match(pageSource, /import heroImage from ['"]@\/assets\/image\/hero\.jpg['"]/, 'the page must import the local hero asset')
assert.match(pageSource, /<Image[^>]*src=\{heroImage\}[^>]*fill[^>]*className="[^"]*object-cover/, 'the hero must use the local image with full-bleed cover behavior')
assert.match(pageSource, /5531984761292/, 'all service calls must use the supplied WhatsApp number')
assert.match(pageSource, /20 anos de\s+experiência/, 'the hero must communicate experience')
assert.match(pageSource, /Prefira enviar\s+um\s+áudio/, 'the WhatsApp CTA must encourage audio messages')
assert.match(pageSource, /Atendimento\s+residencial e comercial/, 'the page must identify both service audiences')
assert.match(pageSource, /qualquer tipo de sinteco/, 'the services must cover every Sinteco finish')
assert.match(pageSource, /Cobrimos itens que não puderem ser movidos/, 'the FAQ must explain protection for immovable items')
assert.match(pageSource, /FaInstagram/, 'the floating Instagram action must use the official brand icon')
assert.match(pageSource, /FaWhatsapp/, 'the floating WhatsApp action must use the official brand icon')
assert.match(pageSource, /instagram\.com\/vanderli\.c\.scalafetador/, 'the floating Instagram action must link to the supplied profile')
assert.match(pageSource, /import dayjs from ['"]dayjs['"]/, 'the footer year must be derived with Day.js')
assert.match(pageSource, /dayjs\(\)\.year\(\)/, 'the footer year must update dynamically')
assert.match(pageSource, /Feito com/, 'the footer must include the requested authorship credit')
assert.match(pageSource, /linkedin\.com\/in\/efraimrsilva/, 'the authorship credit must link to the supplied LinkedIn profile')
assert.match(pageSource, /border-white\/10 px-5 pt-6 text-center text-sm text-white/, 'the updated footer credit must be white')
assert.match(pageSource, /transition-\[color,text-shadow\] duration-300/, 'the LinkedIn credit must animate color and text shadow for 0.3 seconds')
assert.match(pageSource, /hover:\[text-shadow:0_0_12px_rgb\(255_255_255_\/_0\.9\)\]/, 'the LinkedIn credit must gain a white shadow on hover')
assert.match(globalStyles, /html\s*\{[^}]*font-size:\s*17px/, 'the global type scale must increase by one pixel')
assert.match(pageSource, /text-\[11px\]/, 'the explicit ten-pixel label must also increase by one pixel')
assert.match(pageSource, /border-white\/10 px-5 pt-6 text-center text-sm text-white/, 'the final footer credit must be about two pixels larger')
assert.match(pageSource, /border-white\/10 px-5 pt-6 text-center text-sm text-white/, 'the final footer credit must be centered')
for (const videoId of ['DNtrF4q8Vhw', '-_sOfNAwLwA', '4tfvPW9etME']) {
  assert.match(pageSource, new RegExp(`videoId: ['"]${videoId}['"]`), `the gallery must include YouTube video ${videoId}`)
}
assert.match(pageSource, /youtube-nocookie\.com\/embed\/\$\{item\.videoId\}/, 'the gallery must use privacy-enhanced YouTube embeds')
assert.match(pageSource, /autoplay=1&mute=1&loop=1&playlist=\$\{item\.videoId\}&controls=0/, 'the gallery videos must autoplay silently in a loop without controls')
assert.match(pageSource, /rgba\(16,42,67,\.154\)_100%/, 'the right edge of the hero overlay must be 30 percent lighter')
assert.match(layoutSource, /import logo from ['"]@\/assets\/image\/logo\.png['"]/, 'the layout must use the supplied logo asset')
assert.match(layoutSource, /icons:\s*\{\s*icon:\s*logo\.src\s*\}/, 'the supplied logo must be registered as the page icon')

for (let index = 1; index <= 14; index += 1) {
  const extension = index <= 10 ? 'jpg' : 'png'
  assert.ok(existsSync(resolve(projectRoot, `assets/image/g${index}.${extension}`)), `gallery photo g${index} must exist`)
  assert.match(pageSource, new RegExp(`g${index}Image`), `gallery photo g${index} must be imported and used`)
}
assert.match(pageSource, /const \[activeGalleryImage, setActiveGalleryImage\] = useState\(0\)/, 'the photo gallery must track its active image')
assert.match(pageSource, /window\.setTimeout\([\s\S]*?6000/, 'the photo gallery must advance automatically every six seconds')
assert.match(pageSource, /aspect-\[9\/10\][\s\S]*?object-contain/, 'the main gallery image must preserve the average photo proportion without cropping')
assert.match(pageSource, /animate-in fade-in duration-500 ease-in-out transition-opacity/, 'the main gallery image must fade smoothly between photos')
assert.match(pageSource, /onClick=\{\(\) => setActiveGalleryImage\(index\)\}/, 'clicking a thumbnail must select its corresponding photo')
assert.match(pageSource, /sm:grid-cols-7[\s\S]*?lg:grid-cols-14/, 'the thumbnail strip must adapt from compact to wide screens')
assert.match(pageSource, /useRef/, 'the photo gallery must retain references to its thumbnails')
assert.doesNotMatch(pageSource, /scrollIntoView/, 'the gallery must not scroll the page vertically when a thumbnail changes')
assert.match(pageSource, /thumbnailRail\.scrollTo\(\{[\s\S]*?left:/, 'the gallery must scroll only its thumbnail rail horizontally')
assert.match(pageSource, /activeGalleryImage === 0\s*\? 0\s*:/, 'the thumbnail rail must return to its first item after the last photo')
assert.match(pageSource, /<header className="fixed inset-x-0 top-0 z-50/, 'the header must float above every section while the page scrolls')
assert.match(pageSource, /bg-primary\/95[^"]*backdrop-blur-sm/, 'the floating header must retain a readable translucent background')
assert.match(pageSource, /fixed bottom-24 right-5 z-50 flex items-center gap-3/, 'the floating social actions must clear the Netlify badge')
