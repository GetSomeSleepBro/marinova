export const Icon = {
  Rocket: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c3.5 0 6 2.5 6 6 0 2.2-1.1 4.6-3.2 7.3l.5 2.7-2.7-.5C9.6 19.9 7.2 21 5 21c-1.1 0-2-.9-2-2 0-2.2 1.1-4.6 3.5-7.6l-.5-2.7 2.7.5C9.4 4.1 11.8 2 14 2h-2zM7 14c-1.7 2.2-2.5 3.8-2 4.4.6.6 2.2-.3 4.4-2 .8-.7 1.6-1.4 2.3-2.2-1-.4-1.8-1.2-2.2-2.2-.8.7-1.5 1.5-2.5 2z"/>
    </svg>
  ),
  Wave: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2v4c-2 0-2 2-4 2s-2-2-4-2-2 2-4 2-2-2-4-2-2 2-4 2v-4z"/>
    </svg>
  ),
  Book: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M5 4h11a3 3 0 0 1 3 3v12a1 1 0 0 1-1 1H8a3 3 0 0 0-3 3V5a1 1 0 0 1 1-1z"/></svg>
  ),
  Lock: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3z"/></svg>
  ),
  Globe: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.2a15.2 15.2 0 0 0-2.2-6 8 8 0 0 1 5.4 6zM9.5 4.1A13 13 0 0 0 7.4 11H4.1a8 8 0 0 1 5.4-6.9zM4.1 13h3.3c.3 2.7 1.2 5 2.1 6.9A8 8 0 0 1 4 13zm6.9 6.9c-.9-1.8-1.7-4.1-2-6.9h6c-.3 2.8-1.1 5.1-2 6.9zm3-15c.9 1.8 1.8 4.1 2.1 6.1H10c.3-2 1.2-4.3 2-6.1zM16.6 20a13 13 0 0 0 2.1-7h3.2a8 8 0 0 1-5.3 7z"/></svg>
  ),
  Exit: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M10 3a2 2 0 0 0-2 2v4h2V5h10v14H10v-4H8v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H10z"/><path d="M11 11H3v2h8v3l5-4-5-4v3z"/></svg>
  ),
  Search: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M10 2a8 8 0 1 0 4.9 14.3l4.4 4.4 1.4-1.4-4.4-4.4A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4z"/></svg>),
  Gamepad: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 9H5a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2l3-3h4l3 3h2a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-2l-3 3H10L7 9zm0 3h2v2H7v2H5v-2H3v-2h2v-2h2v2z"/></svg>),
  Microscope: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 10h2l1-1V5a2 2 0 1 1 2 0v4l1 1h2v2H7v-2zm-3 8h16v2H4v-2zm10-6h6v2h-6v-2z"/></svg>),
  Drop: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2s6 7.2 6 12a6 6 0 1 1-12 0c0-4.8 6-12 6-12z"/></svg>),
  Fish: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M15 3c-3 0-6 2-8 5H3l2 3-2 3h4c2 3 5 5 8 5 4 0 8-3 8-6s-4-10-9-10zM6 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>),
  Map: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9 3l6 3 6-3v18l-6 3-6-3-6 3V6l6-3zm0 3v12l6 3V9L9 6z"/></svg>),
  Exclaim: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M11 7h2v7h-2V7zm0 9h2v2h-2v-2z"/></svg>),
  Back: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M10 19l-7-7 7-7v4h10v6H10v4z"/></svg>),
  CloudWind: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M6 16h8a3 3 0 1 0 0-6 4 4 0 0 0-7.9 1H6a3 3 0 1 0 0 6z"/></svg>),
  Thermometer: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M10 2a2 2 0 0 1 4 0v9.1a4 4 0 1 1-4 0V2z"/></svg>),
  Tide: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M2 16c2 0 3-2 5-2s3 2 5 2 3-2 5-2 3 2 5 2v2c-2 0-3-2-5-2s-3 2-5 2-3-2-5-2-3 2-5 2v-2z"/></svg>),
  Chart: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M3 3h2v18H3V3zm4 10h2v8H7v-8zm4-6h2v14h-2V7zm4 4h2v10h-2V11zm4-8h2v18h-2V3z"/></svg>),
  User: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM4 20a8 8 0 1 1 16 0v2H4v-2z"/></svg>),
  Boat: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4 12l8-5 8 5-2 6H6l-2-6zm0 8c2 0 3-1 5-1s3 1 5 1 3-1 5-1v2c-2 0-3 1-5 1s-3-1-5-1-3 1-5 1v-2z"/></svg>)
}

