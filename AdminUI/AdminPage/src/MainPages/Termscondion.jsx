// eslint-disable-next-line no-unused-vars
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Image Banner Section */}
      <div className="relative">
        <img
          src="https://ansi.ph/wp-content/uploads/2024/08/How-to-Use-ERP-Systems-to-Help-Scale-Your-Business-960x720.webp"  // Replace with your image URL
          alt="Terms and Conditions Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-5xl font-extrabold text-white">
            Terms and Conditions
          </h1>
        </div>
      </div>

      {/* Terms and Conditions Content */}
      <div className="container mx-auto px-4 py-8">
        <p className="mb-4 text-lg font-semibold">
          Effective Date: July 15, 2024
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-300 mb-4">1. General</h2>
          <p className="mb-4 text-base leading-relaxed">
            By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
          <p className="text-base leading-relaxed">
            We reserve the right to change these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service. Any updates will be communicated to you via email.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-300 mb-4">2. Use License</h2>
          <p className="mb-4 text-base leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on the company s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-base space-y-2">
            <li>Modify or copy the materials.</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
            <li>Attempt to decompile or reverse engineer any software contained on the company’s website.</li>
            <li>Transfer the materials to another person or “mirror” the materials on any other server.</li>
          </ul>
        </section>

        {/* Add more sections as needed */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-300 mb-4">3. Disclaimer</h2>
          <p className="text-base leading-relaxed">
            The materials on the company s website are provided on an  as is basis. The company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
