/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-evergrow-dark text-white selection:bg-yellow-500/30">
      <main>
        <div id="home"><Hero /></div>
        <div id="services"><Services /></div>
        <div id="about"><WhyChooseUs /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
