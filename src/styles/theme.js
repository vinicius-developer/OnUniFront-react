const Theme = {
    color: {
        lima: '#7BB29B',
        salmao: '#ec816c'
    },
    font: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"

    },
    media: (size, elements) => {
        return `@media (max-width: ${size}){
		    ${elements.join('')}
	    }`
    }
    
}

export default Theme