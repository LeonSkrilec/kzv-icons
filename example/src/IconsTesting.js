import React from 'react'
import * as Icons from './icons'

export default function IconsTesting() {
  const icons = []

  for (const i in Icons) {
    if (Object.hasOwnProperty.call(Icons, i)) {
      icons.push(Icons[i])
    }
  }

  const sizes = [10, 12, 14, 18, 24, 32, 64, 128]

  return (
    <div>
      {icons.map((Icon, index) => (
        <div key={index}>
          <strong>{Object.keys(Icons)[index]}</strong>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 600,
              justifyContent: 'space-between'
            }}
          >
            {sizes.map((size) => (
              <div className='icon' key={size}>
                <Icon
                  style={{
                    width: size,
                    height: size,
                    transform: 'translateZ(0)'
                  }}
                ></Icon>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
