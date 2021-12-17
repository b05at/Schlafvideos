// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-brown; icon-glyph: magic;
scheme= await URLScheme.forOpeningScript()

wv = new WebView()

wv.loadURL("https://b05at.github.io/Schlafvideos/angelo.html")

wv.present(true)

const t = new Timer()

const f = () => {

Safari.open(scheme)

Script.complete()

}

const mins = 25 // This is the number of minutes you want to wait

t.timeInterval = mins * 60 * 1000

t.schedule(f)
