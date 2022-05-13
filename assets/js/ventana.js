/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { groups } from './data/cifras'

const BiologicGroups = ({ data, name, isActive }) => {
  const { items } = data
  const result = items.filter(i => i.name === name)[0]
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-xl xl:text-2xl">
          {isActive && result.name}
        </h2>
      </div>
      <div className="mx-auto lg:w-11/12 pb-8">
        <div className="flex flex-col lg:flex-row space-y-12  lg:space-y-0 justify-evenly">
          {isActive && result.statistics?.map(s => {
            return (
              <div key={s.label} className="space-y-6 md:col-start-1 md:col-end-4 lg:col-end-2">
                <h3 className="font-open-sans-condensed text-base text-center">
                  <span className="block font-oswald text-5xl xl:text-6xl font-bold mb-2">
                    {s.value}
                  </span>
                  {s.label}
                </h3>
                <img className="mx-auto" src={s.image} alt="chart" />
                <div className="space-y-4 text-center">
                  {
                    s.details.map((d, i) => {
                      return (
                        <p key={`details-${i}`}>
                          {d}
                        </p>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

const Thematics = ({ data, name, isActive }) => {
  const { items } = data;
  const result = items.filter(i => i.name === name)[0]
  return (
    <div className="mx-auto lg:w-11/12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        <div className="flex flex-col justify-between pb-8 space-y-12">
          {
            isActive && result.statistics?.map((s, idx) => {
              return (
                <div key={`s-${idx}`} className="space-y-6">
                  <h3 className="font-open-sans-condensed text-base text-center">
                    <span className="block font-oswald text-5xl xl:text-6xl font-bold mb-2">
                      {s.value}
                    </span>
                    {s.label}
                  </h3>
                  <img className="mx-auto" src="/images/public/chart-blue.svg" alt="chart" />
                  <div className="space-y-1 text-center">
                    {
                      s.details.map((d, i) => {
                        return (
                          <p key={`details-${i}`}>
                            {d}
                          </p>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
          <div className="text-center">
            <span className="inline-block py-2 px-10 border-blue-section border-2 text-blue-section">
              Listado de especies
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-blue-2 font-bold text-xl xl:text-2xl">
            {isActive && result.name} destacadas
          </h2>
          <div>
            {
              isActive && result.featured?.map((f, idx) => {
                return (
                  <div key={`f-${idx}`} className="flex justify-between space-x-6 xl:space-x-10 py-8 border-b-2 border-green-2">
                    <div className="w-2/6">
                      <img src={f.image} />
                    </div>
                    <div className="w-4/6 flex flex-col justify-between">
                      <div>
                        <h3 className="xl:text-lg font-bold">
                          {f.label}
                        </h3>
                      </div>
                      <div>
                        {
                          f.details.map((d, i) => {
                            return (
                              <p key={`details-${i}`}>
                                {d}
                              </p>
                            )
                          })
                        }
                      </div>
                      <div>
                        <p className="font-open-sans-condensed">
                          <span className="font-oswald font-bold text-xl xl:text-2xl">
                            {f.value}
                          </span>
                          Registros
                        </p>
                      </div>
                      <div className="flex">
                        <div className="w-12 h-1" style={{ backgroundColor: '#93FF41' }}>&nbsp;</div>
                        <div className="w-12 h-1" style={{ backgroundColor: '#FF4141' }}>&nbsp;</div>
                        <div className="w-12 h-1" style={{ backgroundColor: '#FFB341' }}>&nbsp;</div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const Regiones = ({ data }) => {
  const renderRegiones = data.items.filter(item => item.name === 'Municipios')[0];
  return (
    <>
      <div className="space-y-8 text-center font-bold">
        <h2 className="text-xl xl:text-2xl mx-auto text-blue-dark" style={{ maxWidth: '442px' }}>
          Número de especies registradas por municipios de Nariño
        </h2>
        <img className="mx-auto" src={renderRegiones.statistics} alt="grapich" />
        <h3>
          Municipios de Nariño
        </h3>
      </div>
      <div className="text-center space-y-5 mx-auto pb-8" style={{ maxWidth: '445.9px' }}>
        <h3 className="font-bold text-xl xl:text-2xl text-blue-light space-y-5">
          Explora municipios
        </h3>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <select defaultValue='default' className="border border-blue-dark py-2 px-8" name="municipios" id="municipios" onChange={handleChangeMunicipality}>
          <option value="default" disabled>Selecciona un municipio</option>
          {renderRegiones.municipalities.map((mun, i) => <option key={i} value={mun}>{mun}</option>)}
        </select>
      </div>
    </>
  )
}
const handleChangeMunicipality = (e) => {
  window.location.href = `${location.href + e.target.value.toLowerCase()}`
}

const TreeItem = ({ item, color, isActive, setIsActive, valueBreadCrumb, setValueBreadCrumb }) => {
  const isActiveItem = isActive && item.name === valueBreadCrumb;

  const handleClick = (e) => {
    setValueBreadCrumb(e.target.closest('button').dataset.name)
    if (valueBreadCrumb === item.name) {
      setIsActive(!isActive)
    } else {
      setIsActive(true)
    }
  }
  // const hasChildren = item.children && item.children.length
  return (
    <div className={`${isActiveItem ? `bg-${color}` : 'bg-white-3 '}`}>
      <button data-name={item.name} className={`w-full border ${isActiveItem ? 'border-white-3' : `border-t-${color} border-l-${color} border-r-${color}`}`} onClick={handleClick}>
        <div className="py-8 px-2 text-center h-36">
          {
            item.image
              ? <img className="mx-auto h-7" src={isActiveItem ? item.image_active : item.image} alt={item.name} />
              : <div className={`mx-auto bg-${color} bg-opacity-20 w-24 h-7`}></div>
          }
          <p className={`mt-4 font-bold text-lg ${isActiveItem ? 'text-white-3' : 'text-black'}`}>{item.name}</p>
        </div>
      </button>
      <button className={`block w-full border py-3 border-${color} ${isActiveItem ? 'cursor-pointer border-opacity-100': 'cursor-not-allowed border-opacity-50'}`} disabled={isActive && item.name == valueBreadCrumb ? false : true } onClick={(e) => console.log(e)}>
        <img className={`mx-auto h-3 ${isActiveItem ? 'opacity-100' : 'opacity-50'}`} src={isActiveItem ? '/images/public/arrow-bottom-white.svg' : `/images/public/arrow-bottom-${color}.svg`} alt="arrow" />
      </button>
    </div>
  )
}

const LayoutGroup = ({ children, setIsActive, isActive, valueBreadCrumb, color }) => {
  return (
    <div className={'bg-white py-12 lg:py-16 xl:py-20 -mt-9'}>
      <div className={`mx-auto w-10/12 max-w-screen-xl bg-white-3 ${!isActive && 'hidden'}`}>
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <p className={`inline-flex items-center space-x-2 font-open-sans-condensed text-white bg-${color} py-2 px-6`}>
                <span>
                  {valueBreadCrumb}
                </span>
                <img src="/images/public/breadcrumbs-arrow.svg" alt="breadcrum" />
              </p>
            </div>
            <button onClick={() => setIsActive(!isActive)} className="pr-2">
              <img className="w-6 h-6" src="/images/public/close.svg" alt="close" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

const Group = ({ group }) => {
  const [isActive, setIsActive] = useState(false)
  const [valueBreadCrumb, setValueBreadCrumb] = useState('')
  return (
    <div>
      <div className={`pt-24 px-6 bg-${group.color}`}>
        <div className="mx-auto max-w-6xl w-11/12">
          <h2 className="text-white font-bold text-xl lg:text-2xl">
            <span className="font-normal text-lg">Conoce las cifras por </span>{group.name}
          </h2>
          <ul className={`grid grid-cols-1 lg:grid-cols-${group.cols} gap-8 mt-16`}>
            {group.items.map((item, index) => {
              return (
                <TreeItem item={item} color={group.color} isActive={isActive} setIsActive={setIsActive} valueBreadCrumb={valueBreadCrumb} setValueBreadCrumb={setValueBreadCrumb} key={index} />
              )
            })}
          </ul>
        </div>
      </div>
      <LayoutGroup isActive={isActive} setIsActive={setIsActive} valueBreadCrumb={valueBreadCrumb} color={group.color}>
        {
          group.id === 'grupos-biologicos' && <BiologicGroups data={group} name={valueBreadCrumb} isActive={isActive} />
        }
        {
          group.id === 'tematicas' && <Thematics data={group} name={valueBreadCrumb} isActive={isActive} />
        }
        {
          group.id === 'regiones' && <Regiones data={group} name={valueBreadCrumb} isActive={isActive} />
        }
      </LayoutGroup>
    </div>
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
