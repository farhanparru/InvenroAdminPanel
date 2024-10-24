// eslint-disable-next-line no-unused-vars
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 dark:text-gray-400">
          <h1 className="text-3xl font-bold mb-4 dark:text-gray-200 text-center">
            Privacy Policy for Restaurant ERP Billing Software
          </h1>

          {/* Image Section */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2024/6/426845760/EV/PH/PL/196291091/billing-software.jpg"  // Use the correct path to your image
              alt="Restaurant ERP Billing Software"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
            />
          </div>

          <p className="mb-4">
            Our restaurant ERP billing software provides a seamless billing experience for restaurant owners. This Privacy Policy explains how we collect, use, and protect your personal data while using the software.
          </p>

          {/* Information Collection and Use */}
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Information Collection and Use</h2>
          <p className="mb-4">
            We may require you to provide personal information such as your name, email, and contact details. This data is collected to improve your experience, process transactions, and provide customer support. We only collect information necessary to fulfill these purposes and will not share it without your consent, except as required by law.
          </p>

          {/* Data Security */}
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Data Security</h2>
          <p className="mb-4">
            The security of your personal information is important to us. We implement technical and organizational measures to ensure your data is secure from unauthorized access, use, or disclosure. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
          </p>

          {/* Cookies and Tracking */}
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            Our software may use cookies to enhance user experience. Cookies are small data files stored on your device that help us understand how you interact with the software, personalize content, and improve functionality. You can choose to disable cookies through your browser settings, though this may limit some features of the software.
          </p>

          {/* Third-Party Services */}
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Third-Party Services</h2>
          <p className="mb-4">
            We may use third-party service providers, such as payment processors or customer support platforms, to assist with specific functions of the software. These third parties may have access to your personal data but are obligated to use it only for the purpose of providing their services to us and must protect it in accordance with this privacy policy.
          </p>

          {/* User Rights */}
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Your Rights</h2>
          <p className="mb-4">
            You have the right to access, modify, or delete your personal information at any time. If you wish to exercise these rights, please contact us at support@restauranterp.com. We will respond to your request in accordance with applicable data protection laws.
          </p>

          {/* Changes to This Policy */}
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Changes to This Policy</h2>
          <p className="mb-4">
            We reserve the right to update this privacy policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your data.
          </p>

          <p className="mb-4">
            This policy is effective as of May 15, 2024.
          </p>

          {/* Contact Us */}
          <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or suggestions regarding our Privacy Policy, feel free to contact us at support@restauranterp.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
