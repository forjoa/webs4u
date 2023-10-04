import '../styles/DevInfo.css'

const DevInfo = ({ data, close }) => {
    const pLang = data.programming_lang.split('/')

    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <h2 className="header">{data.name}</h2>
            <div className="content">
                {data.description}
                <ul>
                    {
                        pLang.map((lang, index) => {
                            return (
                                <li key={index}>{lang}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default DevInfo