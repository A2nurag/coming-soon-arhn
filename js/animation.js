const tl = gsap.timeline({ repeat: 0 })
tl.to('#fs', { opacity: 1, duration: 2, delay: 1 })
tl.to('#fs h1', { textShadow: '#aaa 0 0 15px', duration: 1.5 })
tl.to('#fs', { opacity: 0, duration: 0.4 })

tl.to('#ss', { opacity: 1, duration: 2 })
tl.fromTo(
  '.second-screen-timer',
  { y: 20 },
  { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.3)' },
  'someLabel'
)
tl.fromTo(
  '.top-bar',
  { y: -20 },
  { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.3)' },
  'someLabel'
)
tl.to('.second-screen-subheader', { opacity: 1, duration: 0.8 }, 'someLabel')
tl.to('.watermark', { opacity: 0.7, x: 1000, delay: 2 })
tl.to('.watermark', { x: -2000, duration: 6, ease: 'linear' })
