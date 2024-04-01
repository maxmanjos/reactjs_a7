import React from 'react';
/* import './index.css'; */
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="container">
            <header>
              <div className="container">
                <div id="branding">
                  <h1><span class="highlight">RWU</span>Web Design</h1>
                </div>
                <nav>
                  <u1>
                    <li className="current"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                  </u1>
                </nav>
              </div>
            </header>

      <section id="showcase">
        <div className="container">
          <h1>Affordable Professional Web Design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus et augue vitae iaculis. Suspendisse fringilla ex ut odio ultrices, vel aliquam nulla mollis.</p>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our Newsletter</h1>
          <form>
            <input type="email" id="email" autocomplete="off" placeholder="Enter your Email..." />
            <button type="submit" class="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="boxes">
        <div className="container">
                    <div className="box">
                      <Image src="/img/logo_brush.png" alt="Employee Education" width={400}
      height={100} />  {/* Added alt text for accessibility */}
                      <h3>HTML5 Markup</h3>
                      <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
                    </div>

          <div className="box">
          <Image src="/img/logo_css.png" alt="Customer Support" width={400}
      height={100} />  {/* Added alt text for accessibility */}
            <h3>CSS3 Styling</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>

          <div className="box">
            <Image src="/img/logo_html.png" alt="System Troubleshooting" width={400}
      height={100} />  {/* Added alt text for accessibility */}
            <h3>Graphic Design</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>RWU Comsc230 Web Design, Copyright &copy; 2020</p>
      </footer>
    </div>
  );
};

export default Home;