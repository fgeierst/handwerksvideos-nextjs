import styles from '../styles/Nav.module.css'

function Nav() {
  return (
		<nav >
			<ul className={styles.nav__ul}>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/blog">Blog</a></li>
			</ul>
			
		</nav>
	)
	}

export default Nav

