import React from 'react'

const Home2 = () => {
    return (
        <section className='bg-gray-700 dark:bg-gray-800 min-h-screen py-6'>
            <div className='text-center px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto'>

                <div className="mb-5">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Mental Health
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                        Read about some mental health related topics
                    </p>
                </div>


                <div className='grid gap-14 lg:gap-18 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6'>

                    <div className="flex flex-col text-center items-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://img.freepik.com/premium-vector/adhd-attention-disorder-prevent-adhd-vector-stock-illustration_100456-10568.jpg" alt="ADHD" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            ADHD
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://www.psychiatry.org/patients-families/adhd/what-is-adhd'>Read More</a>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1367531393/vector/persons-head-with-chaotic-thought-pattern-depression-sadness-mental-health-concept.jpg?s=612x612&w=0&k=20&c=eVfcTMyp6DtHCHqZUVmu4sUq2WEG4Pa2HS2lXGFd8vc=" alt="Anxiety Disorders" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            Anxiety Disorders
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders'>Read More</a>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1458684808/vector/human-head-spiritual-energy-bipolar-disorder-mind-mental-health-feel-psychology-abstract.jpg?s=612x612&w=0&k=20&c=LGjxugRLLf9YLDszFwaGlZe3UzTtZXWuSTsAHZ6k5Ok=" alt="Bipolar Disorder" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            Bipolar Disorder
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder'>Read More</a>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1281210009/photo/depressed-asian-woman-in-deep-many-thoughts-having-problem-with-over-thinking.jpg?s=612x612&w=0&k=20&c=1Z1kXxzKY38nfSd5M6APkwuHoZXA8vpAEpyzUb2OopY=" alt="Depression" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            Depression
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://www.who.int/news-room/fact-sheets/detail/depression'>Read More</a>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1334045604/vector/depressed-woman-not-feeling-hungry-and-just-eating-broccoli-for-meal-eating-disorder.jpg?s=612x612&w=0&k=20&c=6xZ0Z2x7sb6w37nIRtZuzZXytlia9gxG3-xnTdm9crE=" alt="Eating Disorder" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            Eating Disorder
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://my.clevelandclinic.org/health/diseases/4152-eating-disorders'>Read More</a>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/694068988/photo/obsessive-compulsive-disorder.jpg?s=612x612&w=0&k=20&c=qJmwQ2bA4J7bShtq60SiYNh5_gNZ0fexuNmHrBY2AxM=" alt="OCD" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            OCD
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://my.clevelandclinic.org/health/diseases/9490-ocd-obsessive-compulsive-disorder'>Read More</a>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1472513556/vector/depressed-woman-sitting-on-floor-and-hugging-knees-mental-health-concept-depression-bipolar.jpg?s=612x612&w=0&k=20&c=c9Hch6VYUsgJPgspG8hDkeQera_wJoa6Az9acVN0v_Q=" alt="PTSD" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            PTSD
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://my.clevelandclinic.org/health/diseases/9545-post-traumatic-stress-disorder-ptsd'>Read More</a>

                    </div>

                    <div className="flex flex-col items-center text-center group">
                        <img className="mx-auto mb-6 w-36 h-36 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105" src="https://media.istockphoto.com/id/1770175167/vector/schizophrenia-bipolar-disorder-mental-health-concept.jpg?s=612x612&w=0&k=20&c=o1km4FaoWpY5vPcfnx0vS9goPpQx6u8gIEwm6c5amdI=" alt="Schizophrenia" />
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">
                            Schizophrenia
                        </h3>
                        <a target="_blank" className='text-blue-300 hover:text-blue-500 transition-colors duration-300 font-medium cursor-pointer text-lg' href='https://my.clevelandclinic.org/health/diseases/4568-schizophrenia'>Read More</a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home2
