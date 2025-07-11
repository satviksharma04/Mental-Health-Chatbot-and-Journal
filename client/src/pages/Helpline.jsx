import React from 'react'

const helplineData = [
    {
        name: 'iCall – TISS',
        phone: '9152987821',
        availability: 'Mon–Sat, 10am–8pm',
        website: 'https://icallhelpline.org',
        description: 'Free mental health counseling (emotional/psychological support)',
    },
    {
        name: 'Vandrevala Foundation Helpline',
        phone: '1860 266 2345 / 9999 666 555',
        availability: '24/7',
        website: 'http://vandrevalafoundation.com',
        description: 'Emotional crisis intervention, mental illness support',
    },
    {
        name: 'AASRA',
        phone: '9820466726',
        availability: '24/7',
        website: 'http://www.aasra.info',
        description: 'Suicide prevention, depression, and emotional support',
    },
    {
        name: 'Fortis Mental Health Helpline',
        phone: '8376804102',
        availability: '24/7',
        website: 'https://www.fortishealthcare.com',
        description: 'Mental health & stress-related concerns',
    },
    {
        name: 'Parivarthan',
        phone: '7676602602',
        availability: 'Mon–Fri, 10am–4pm',
        website: 'https://parivarthan.org',
        description: 'Emotional well-being, stress & relationship support',
    },
    {
        name: 'Connecting Trust',
        phone: '9922001122',
        availability: 'Mon–Sat, 2pm–8pm',
        website: 'https://www.connectingtrust.org',
        description: 'Free mental health counseling (emotional/psychological support)',
    },
    {
        name: 'Samaritans Mumbai',
        phone: '84229 84528 / 84229 84529 / 84229 84530',
        availability: 'Mon–Sun, 5pm–8pm',
        website: 'https://samaritansmumbai.com',
        description: 'Distress and crisis intervention',
    },
    {
        name: 'iHope (The Live Love Laugh Foundation)',
        phone: 'N/A',
        availability: 'Check website for details',
        website: 'https://thelivelovelaughfoundation.org',
        description: 'Youth-focused support for anxiety & depression',
    },
    {
        name: 'Snehi',
        phone: '91-9582208181',
        availability: 'Mon–Sat, 10am–6pm',
        website: 'http://www.snehi.org',
        description: '	Psychological support, especially for adolescents & youth',
    },
];


const Helpline = () => {

    return (
        <div className='min-h-screen bg-gray-400 py-8 px-6'>
            <div className='max-w-5xl mx-auto text-center pb-4'>
                <h1 className='text-3xl sm:text-5xl font-bold text-gray-900 mb-4'>
                    Find Help, Find Hope
                </h1>
                <p className='text-lg sm:text-xl text-gray-700'>
                    If you're struggling, you're not alone. Mental health matters and support is just a call or message away. Here’s a list of verified mental health helplines and resources available 24/7 across India.
                </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                {helplineData.map((helpline, idx) => (
                    <div key={idx} className='bg-gray-300 shadow-lg shadow-zinc-500 rounded-lg p-6 text-left hover:shadow-xl transition duration-300'>
                        <h3 className='text-xl font-semibold bg-gray-800 text-white text-center p-2 rounded-xl mb-2'>{helpline.name}</h3>
                        <p className='text-gray-600 pb-1'>{helpline.description}</p>
                        <p className='text-gray-700 pb-1'>📞 {helpline.phone}</p>
                        <p className='text-sm text-gray-500 mb-2'>Availability: {helpline.availability}</p>
                        <a
                            href={helpline.website}
                            className='text-blue-500 hover:text-blue-700 text-sm font-medium'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Visit Website
                        </a>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Helpline
