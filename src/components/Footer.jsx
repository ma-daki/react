import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20 border-t border-neutral-700 py-8'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className='text-xl font-semibold mb-4'>Resources</h3>
            <ul>
              {resourcesLinks.map((link, index) => (
                <li key={index} className='mb-2'>
                  <a href={link.href} className='text-neutral-300 hover:text-white'>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Platform</h3>
            <ul>
              {platformLinks.map((link, index) => (
                <li key={index} className='mb-2'>
                  <a href={link.href} className='text-neutral-300 hover:text-white'>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Community</h3>
            <ul>
              {communityLinks.map((link, index) => (
                <li key={index} className='mb-2'>
                  <a href={link.href} className='text-neutral-300 hover:text-white'>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer