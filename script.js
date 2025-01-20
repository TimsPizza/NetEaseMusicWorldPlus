const inject = () => {
	const script = (document.head || document.documentElement).appendChild(document.createElement('script'))
	script.src = chrome.runtime.getURL('inject.js')
	script.onload = () => script.parentNode.removeChild(script)
}

chrome.storage.local.get('mode').then(data => {
	const mode = data.mode == null ? 2 : data.mode
	if (mode == 2) inject()
})
