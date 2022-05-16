import React from 'react'
import Navbar from './components/Navbar'
import Travel from './components/Travel'
import data from './data'

export default function App() {
    const travels = data.map(item => {
        return(
            <Travel 
                key={item.id} 
                item={item} 
            />
        )
    })
    return (
        <div>
            <Navbar />      
            <section className="card-list">
                {travels}
            </section>                  
        </div>
    )
}