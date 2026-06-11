export const cleanDescription = (description: string) => {
	if (!description) return ''

	let cleaned = description

	cleaned = cleaned.replace(
		/\[(anime|manga|character|person)=\d+\](.*?)\[\/\1\]/gi,
		'$2'
	)
	cleaned = cleaned.replace(/\[url=[^\]]+\](.*?)\[\/url\]/gi, '$1')
	cleaned = cleaned.replace(/\[b\](.*?)\[\/b\]/gi, '$1')
	cleaned = cleaned.replace(/\[i\](.*?)\[\/i\]/gi, '$1')
	cleaned = cleaned.replace(/\[\/?[a-z]+\]/gi, '')
	cleaned = cleaned.replace(/\[[ぁ-んァ-ヶー一-龠々〆〤０-９]+\]/g, '')
	cleaned = cleaned.replace(/\[\s*\]/g, '')
	cleaned = cleaned.replace(/\s+/g, ' ')
	cleaned = cleaned.trim()

	return cleaned
}
