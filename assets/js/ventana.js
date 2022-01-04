/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { groups } from './data'

const TreeItem = ({ item, color }) => {
  const [isActive, setIsActive] = useState(false)
  const hasChildren = item.children && item.children.length
  return (
    <li>
      <div className={`bg-cultured border border-${color}`}>
        <div className="py-8 px-2 text-center h-36">
          {
            item.image
              ? <img className="mx-auto h-7" src={item.image} alt={item.name} />
              : <div className={`mx-auto bg-${color} bg-opacity-20 w-24 h-7`}></div>
          }
          <p className="mt-4 font-bold text-lg">{item.name}</p>
        </div>
        <button className={`w-full border-t py-3 border-${color}`} onClick={() => setIsActive(!isActive)}>
          <img className="mx-auto h-3" src={`/images/arrow-bottom-${color}.svg`} alt="arrow bottom" />
        </button>
      </div>
      {isActive && <div>I'm open</div>}
    </li>
  )
}

const Group = ({ group }) => {
  return (
    <>
      <section className={`pt-24 px-6 bg-${group.color}`}>
        <div className="mx-auto max-w-6xl w-11/12">
          <h2 className="text-white font-bold text-xl lg:text-2xl">
            <span className="font-normal text-lg">Conoce las cifras por </span>{group.name}
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
            {group.items.map((item, index) => {
              return (
                <TreeItem item={item} color={group.color} key={index} />
              )
            })}
          </ul>
        </div>
      </section>
      <div className="bg-cultured h-32" style={{ marginTop: '-36px' }}></div>
    </>
  )
}

const App = () => {
  return (
    <>
      {groups.map(group => {
        return <Group group={group} key={group.id} />
      })}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)
