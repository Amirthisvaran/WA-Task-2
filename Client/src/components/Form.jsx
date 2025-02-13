import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [question, setQuestion] = useState('')

    const submitClicked = () => {
        setTimeout(() => {
            setName('')
            setLocation('')
            setQuestion('')
        },100)
    }

    const collectData = async (e) => {
        e.preventDefault()
        let result = await fetch('http://localhost:4000/', {
            method: 'post',
            body: JSON.stringify({name, location, question}),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json
        localStorage.setItem('feedback', JSON.stringify())
    }
  return (
    <div className='container'>
        <form onSubmit={collectData}>
            <h1>Ask your Question</h1>
            <input type='text' className='per' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='text' className='location' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
            <input type='text' className='question' placeholder='Enter your Question' value={question} onChange={(e) => setQuestion(e.target.value)}/>
            <p className='note-p'>Notes இந்தப் பகுதியில் உங்களுக்கான பொதுவான கேள்விகள் அல்லது பொதுவான சந்தேகங்களை கேட்டுக் கொள்ளலாம். தனிப்பட்ட உங்களது ஜாதக கேள்விகளுக்கு விடை அளிக்கப்படாது
            </p>
            <button type='submit' onClick={submitClicked}>Submit</button>
        </form>
    </div>
  )
}

export default Form