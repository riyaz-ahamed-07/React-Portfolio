import { useRef, useState } from 'react';
import { links } from '../../data/profile';
const items = ['About', 'Work', 'Experience', 'Background', 'Contact'];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  function close() { setOpen(false); button.current?.focus(); }
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header" onKeyDown={e => { if (e.key === 'Escape' && open) close(); }}><div className="container nav-bar"><a className="brand" href="#top" aria-label="MR, Mohamed Riyaz Ahamed, home"><span aria-hidden="true">MR</span></a><nav className="desktop-nav" aria-label="Primary">{items.map(item => <a key={item} href={'#' + item.toLowerCase()}>{item}</a>)}</nav><span className="availability"><i aria-hidden="true" />Available for internships</span><a className="button nav-resume" href={links.resume} download>Resume</a><button ref={button} className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span></button></div><nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>{items.map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={close}>{item}</a>)}</nav></header></>;
}
