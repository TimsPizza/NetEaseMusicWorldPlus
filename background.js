let mode
const title = ['closed', 'normal', 'enhanced']

const sync = async () => {
	await chrome.storage.local.set({ mode })
	await chrome.action.setTitle({ title: `${chrome.i18n.getMessage('name')} [${chrome.i18n.getMessage(title[mode])}]` })
}

chrome.action.onClicked.addListener(() => {
	mode = (mode + 1) % 3
	sync()
})

chrome.storage.local.get('mode').then(data => {
	mode = data.mode == null ? 2 : data.mode
	sync()
})
