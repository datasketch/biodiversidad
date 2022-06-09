/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,

} from '@szhsin/react-menu';
import { groups } from './data'

const BiologicGroups = ({ data={}, name, isActive }) => {
    return (
    <>
      <div>
        <h2 className="text-center font-bold text-xl xl:text-2xl">
          {isActive && name}
        </h2>
      </div>
      <div className="mx-auto lg:w-11/12 pb-8">
          {Object.entries(data).map(([key, value], i) => {
             return (
                <ul key={i} className="space-x-2">
                  <span>{key}: </span>
                  <span>{value}</span>
                </ul>
              )
          })
        }
        {/* <div className="flex flex-col lg:flex-row space-y-12  lg:space-y-0 justify-evenly">
          {isActive && data.map(s => {
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
        </div> */}
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

  const handleChangeMunicipality = (e) => {
    window.location.href = `${location.href + e.target.value.toLowerCase()}`
  };

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

const TreeItem = ({ item, arbol, color, isActive, setIsActive, valueBreadCrumb, setValueBreadCrumb, setValueLabel }) => {
  const isActiveItem = isActive && item.name === valueBreadCrumb[0];

  const itemToRender = arbol.filter(render => render.label === item.name)[0] || {};

  const arbolReduce = arbol.reduce((acc, curr) => [...acc, curr.label], '')
  const hasChildren = "children" in itemToRender;

  useEffect(() => {
    if (valueBreadCrumb[0] === item.name) {
      setIsActive(true)
    }
  }, [valueBreadCrumb])

  handleUpdateBreadCrumb = (e) => {
    const target = e.target.ariaLabel || e.target.innerText || e.target.closest

    setValueBreadCrumb((prevState) => {
      if (prevState.includes(target)) {
        const iof = prevState.indexOf(target)
        return prevState.slice(0, iof + 1)
      }
      if (arbolReduce.includes(target)) {
        return prevState = [target]
      }
      return [...prevState, target];
    });

    setValueLabel(target);
  };

  return (
    <div className={`${isActiveItem ? `bg-${color}` : 'bg-white-3 '}`}>
      <button data-name={itemToRender.label} className={`w-full border ${isActiveItem ? 'border-white-3' : `border-t-${color} border-l-${color} border-r-${color}`}`} onClick={handleUpdateBreadCrumb}>
        <div className="py-8 px-2 text-center h-36">
          {
            item.image
              ? <img className="mx-auto h-7" src={isActiveItem ? item.image_active : item.image} alt={item.name} />
              : <div className={`mx-auto bg-${color} bg-opacity-20 w-24 h-7`}></div>
          }
          <p className={`mt-4 font-bold text-lg ${isActiveItem ? 'text-white-3' : 'text-black'}`}>{item.name}</p>
        </div>
      </button>
      <Menu
        menuClassName={`bg-${color} text-white text-lg rounded-none`}
        menuButton={<MenuButton className={`block w-full border py-3 border-${color} ${isActiveItem ? 'cursor-pointer border-opacity-100' : 'cursor-not-allowed border-opacity-50'}`} disabled={isActive && item.name === valueBreadCrumb[0] ? false : true}>
          <img className={`mx-auto h-3 ${isActiveItem ? 'opacity-100' : 'opacity-50'}`} src={isActiveItem ? '/images/public/arrow-bottom-white.svg' : `/images/public/arrow-bottom-${color}.svg`} alt="arrow" />
        </MenuButton>}
        onClick={handleUpdateBreadCrumb}
      >
        {hasChildren && itemToRender.children?.map((child, i) => <SubMenuGroups child={child} color={color} key={i} />)}
      </Menu>
    </div>
  )
}


const SubMenuGroups = ({ child, color, name }) => {
  const hasChildren = child.children && child.children.length > 0;
  return (<>
    {hasChildren && (<SubMenu openTrigger='clickOnly' menuClassName={`bg-${color} text-white rounded-none`} className="hover:text-blue hover:font-bold" aria-label={child.label} label={child.label}>
      {child.children.map((subChild, i) =>
        <SubMenuGroups child={subChild} key={i} color={color} />
      )}
    </SubMenu>)}
    {!hasChildren && <MenuItem className={'hover:bg-white hover:text-blue hover:font-bold'} value={child.label} aria-label={child.label}> {child.label}</MenuItem>}

  </>
  )
};


const LayoutGroup = ({ children, setIsActive, isActive, valueBreadCrumb, setValueBreadCrumb, color }) => {
  return (
    <div className={'bg-white py-12 lg:py-16 xl:py-20 -mt-9'}>
      <div className={`mx-auto w-10/12 max-w-screen-xl bg-white-3 ${!isActive && 'hidden'}`}>
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div className={`inline-flex items-center font-open-sans-condensed`}>
              {valueBreadCrumb.map((value, index, array) => (
                <div key={value} className={`flex space-x-1 px-3 py-2 items-center ${array.length - 1 === index && 'bg-blue text-white'}`}>
                  <span >
                    {value}
                  </span>
                  <div className='h-11/12 my-auto'>
                    <img src={`${array.length - 1 === index ? '/images/public/breadcrumbs-arrow.svg' : '/images/public/breadcrumbs-arrow-green.svg'}`} alt="breadcrum" />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => {
              setIsActive(!isActive)
              setValueBreadCrumb([])
            }} className="pr-2">
              <img className="w-6 h-6" src="/images/public/close.svg" alt="close" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

const Group = ({ item }) => {
  const { id, name, color, cols, arbol, data, imageNames } = item;
  const [isActive, setIsActive] = useState(false)
  const [valueBreadCrumb, setValueBreadCrumb] = useState([])
  const [valueLabel, setValueLabel] = useState('')
  const filterByLabel = data.filter((item) => item.label === valueLabel)[0]
  // console.log(data);
  return (
    <div>
      <div className={`pt-24 px-6 bg-${color}`}>
        <div className="mx-auto max-w-6xl w-11/12">
          <h2 className="text-white font-bold text-xl lg:text-2xl">
            <span className="font-normal text-lg">Conoce las cifras por </span>{name}
          </h2>
          <ul className={`grid grid-cols-1 lg:grid-cols-${cols} gap-8 mt-16`}>
            {imageNames.map((item, index) => {
              return (
                <TreeItem item={item} arbol={arbol} color={color} isActive={isActive} setIsActive={setIsActive} valueBreadCrumb={valueBreadCrumb} setValueBreadCrumb={setValueBreadCrumb} setValueLabel={setValueLabel} key={index} />
              )
            })}
          </ul>
        </div>
      </div>
      <LayoutGroup isActive={isActive} setIsActive={setIsActive} valueBreadCrumb={valueBreadCrumb} setValueBreadCrumb={setValueBreadCrumb} color={color}>
        {
          id === 'grupos-biologicos' && <BiologicGroups data={filterByLabel} name={valueBreadCrumb[valueBreadCrumb.length-1]} isActive={isActive} valueBreadCrumb={valueBreadCrumb} />
        }
        {/* {
          group.id === 'tematicas' && <Thematics data={group} name={valueBreadCrumb} isActive={isActive} />
        }
        {
          group.id === 'regiones' && <Regiones data={group} name={valueBreadCrumb} isActive={isActive} />
        } */}
      </LayoutGroup>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Group item={groups[0]}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
)
