import React from 'react';
import Minted from './Minted';
import Transfers from './Transfers';
import Upgrades from './Upgrades';
import TokenData from './Token-data'; // Import the new component
import { motion } from 'framer-motion';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>CrowdsaleToken Token Dashboard</h1>
        <p>Track important metrics of token transactions</p>
      </motion.header>

      <main className="dashboard-content">
        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Minted />
        </motion.section>

        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Transfers />
        </motion.section>

        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Upgrades />
        </motion.section>

        <motion.section
          className="dashboard-section"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <TokenData /> {/* Add the TokenData component */}
        </motion.section>
      </main>
    </div>
  );
}

export default Dashboard;
