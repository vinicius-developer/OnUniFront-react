const Theme = {
    color: {
        lima: '#7BB29B',
        salmao: '#ec816c'
    },
    media: (size, elements) => {
        return `@media (max-width: ${size}){
		    ${elements.join('')}
	    }`
    }
    
}

export default Theme