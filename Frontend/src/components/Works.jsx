import React from 'react';

function Works() {
  const steps = [
    {
      step: 1,
      title: 'Registration and Authentication',
      description:
        'Patients and healthcare providers register and receive a unique blockchain address. Secure login using multi-factor authentication (MFA).',
    },
    {
      step: 2,
      title: 'Data Entry and Storage',
      description:
        'Healthcare providers input health data, which is encrypted and stored on the blockchain. Large files are stored on decentralized storage solutions like IPFS.',
    },
    {
      step: 3,
      title: 'Data Access and Sharing',
      description:
        'Patients grant access to their data via smart contracts. Providers request access, which is verified and granted by smart contracts. All access events are recorded on the blockchain for transparency.',
    },
    {
      step: 4, 
      title: 'Data Analysis and Insights',
      description:
        'Advanced analytics are performed on the data, providing actionable insights to healthcare providers while maintaining patient privacy.',
    },
    {
      step: 5,
      title: 'Interoperability and Integration',
      description:
        'The Workslication integrates with various healthcare systems for seamless data exchange. Tools are provided for developers to build custom integrations.',
    },
    {
      step: 6,
      title: 'Emergency Access',
      description:
        'Temporary access can be granted in emergencies through special smart contracts. All emergency access is logged for accountability.',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-green-500  h-auto text-center text-white font-poppins mt-20">
      <div className="bg-gray-100 w-full h-full overflow-hidden relative ">
      <div className="text-6xl font-bold mt-20">
  <h1>How It Works</h1>
</div>
        {steps.map(({ step, title, description }) => (
          <div key={step} className="relative flex items-start  justify-center mt-7 mb-4">
             <div className="flex flex-col items-center">
              <div className="bg-royalblue rounded-full w-14 h-14 opacity-90 flex items-center justify-center">
                <b className="text-4xl">{step}</b>
              </div>
              <b className="mt-2">Step{step}</b>
            </div>
            <div className="ml-10 bg-royalblue bg-opacity-40 rounded-xl py-4 px-5 w-[1000px] text-left">
              <b className="text-xl">{title}</b>
              <p className="text-black mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;