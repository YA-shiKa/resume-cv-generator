import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRegLightbulb, FaMagic, FaRocket, FaRegClock, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiOutlineTemplate, HiOutlineDocumentText } from 'react-icons/hi';
import { BsGoogle } from 'react-icons/bs';

const features = [
  {
    icon: <FaMagic className="h-8 w-8 text-white" />,
    title: 'AI-Powered Content Generation',
    description: 'Leverage Google\'s Gemini AI to create compelling resumes and cover letters tailored to your industry.',
    color: 'from-purple-500 to-indigo-600',
    delay: 0.2
  },
  {
    icon: <HiOutlineTemplate className="h-8 w-8 text-white" />,
    title: 'Professional Templates',
    description: 'Choose from a variety of ATS-friendly templates designed by HR professionals.',
    color: 'from-blue-500 to-cyan-600',
    delay: 0.4
  },
  {
    icon: <FaRegClock className="h-8 w-8 text-white" />,
    title: 'Real-time Preview',
    description: 'See changes instantly as you edit, ensuring your document looks perfect before export.',
    color: 'from-green-500 to-teal-600',
    delay: 0.6
  },
  {
    icon: <FaRocket className="h-8 w-8 text-white" />,
    title: 'Quick Export',
    description: 'Export your documents in multiple formats including PDF and Word, ready for submission.',
    color: 'from-orange-500 to-pink-600',
    delay: 0.8
  }
];

const testimonials = [
  {
    name: 'Aaradhya Mehta',
    role: 'Software Engineer',
    content: 'The AI suggestions helped me highlight achievements I would have otherwise overlooked. Landed my dream job!',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAPDw8PDw0PDw8PDxAPDw8PDg8PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQFy0lHR4tKzArLS0tLS0tListLS0tLS8tLS0tKy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tN//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIHAwQGBQj/xABDEAACAQIDBQYCCQEFBwUAAAABAgADEQQSIQUGMUFRBxNhcYGRIjIUI0JScqGxwfDRYoKSsuFjZHN0orPxFTM0Q1P/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAnEQEBAAICAgICAQQDAAAAAAAAAQIRAyESMQRBIjKxcYGRwRRCUf/aAAwDAQACEQMRAD8A3NLECEKBKIEsJIiIFiIgIiICJw4rEpSRqlRgiKLszGwAmtt4e0tgSuEUKo/+yooLN5KdB6wNnEgcZFYHgQfKaHxm+GPxClWqMyZTmyhV08wB4z52yt4q1Cpmw9aojfdJureanQydD9FxPKbl74U8evduBTxSD4k5OPvJ/SerkBERAREQLJEQEREBJLECSSyQEhlkMCSGWDCGMkykgZSySwMoiICWSISsRJAswq1AqlmNlUEkngB1mc8P2pba7jDdwps9a+a3KmOPuSB5XgeI363vbGVCqEjC02y01Btnb758f51nzdhbvvimz1LimOOv8vPlbFwhxeJSmoPdqdSeQ5t5/wBZtJ8ZhMKoQ1FVV+GwucvnaVzy11Hbjwnuuthdg0KItTpr4k6kz4e3916brmRclQfKV0IntcHiKVZc1J1deqkGcr0AeImS3KVtkxs1pp7AYqrQqK4YpXotow0Nx/X95vjdbbS47DJWFg/y1V+7UHH0PH1mod+9niliFqAWWrofMX/Yn2n1+yzahpYk0GPwVxa3IPxU/qPWasMvLHbDy4eOWm3pZJZdySIlgSWSWBIiICIiAiIgSSWIGMhmUQhjERJGUREDKWYy3kBEXiAiIvAGfn3tK202IxdVlN0V+7X/AIaBgPdtfWbo3vxjUcFWZDZyuQMOK5jYsPIEzQHeK1WoGF2ZAVUgsDyPpwj1Nr4zd09j2UYC2HqV2AzVHsDzsB/r+U+9tfGYtCUoYWm9PTiwBa/H4QDOPs5t9ERdPhLKbcCcxnqq9On9q0z53dta8J1I8psfCotVXFD6PVa3eLT0pNcE8OHnafU3gxhp07LWFA6E1CL248v5wnaovTa5pgZQ1s/AX46THE4JKvwvlNxpexv1Fpxv9XeNfbzhXwvenaH0p6bKcuRAONjw14GfN2ViDTqq6mzIwYe9wff9Z6rfXdSmMM9ZFValNDly3AK3uVtw43M8Hhq9srfhv+80cV3Ky801Y/SWCxAq06dQcKiK49Rec0+BuLie8wFE/czp6Am35ET787M1WJIhBLJEBERAGIiAiIgJJYMIYmIiSERECCWSWAEskQLJeIgLxeIgfE3xdVwWILcBRrH1yMAPcifnjHM1KstVRmyPmy3tmXmvtb3m8O1PFins6prbO9NR4/ECR7AzRprBlW/NR5/z+dJMm0yti9m+11xFCqyrkIrP8N7kA2P7z0O1cVlAL5zSJAORSx1Nhe3L+s1jubtIYTEWY2pVyAx+yH5N68PabdpZXXkQRY9CJh5sPy19PR4M/wAd/bpNQBAPc1xwIbuzYX4HTzE4qzJZgtUir8LKrsVuy8LA9fCdxBXpN9U7BeSkmw/aSrhu8dauIIqPTB7vMBane1yPHQTln4tOL5+8u2VGzqtR9LUmNjxvbhNSbGBqU1B+7r6DWfb7U9vq2XBUjoCGrW4AD5U8+B9B1nldi4ohAvNWIP4W1/W808Esw3ftg+RnLnqfTd/ZJtImlVwr8UbvEPsrD8h7zYc0puBtDu8YhLWDPTBtwbOe6t71AfSbqE7xmy9rESyVEiWSAiItCSIiAiIhBJLMYCIiSEksQMQZbzGUQhlExlvCVkvJeLwLBkJkMDW/a0WqilRUXWkDiKnTUimg/wA009tBMqkL9lsy/hPL9fabZ7RcbejiiLAvjKVBeppUKWZ/+tzNV40fVZm4kCw5kkkgCTKtrphhKucW68z9luIvPcbm71OB3NQFsmhW/wAaeXUTwOAGWmxbQsQFHPz/AF9pjQxbU8QXRrOjfsLgjmJTLi8+nTDl8O76b3obbotocwboVN51dqbRLhhTuoCkliLewM+LsLa1PGUgy/DUp2DrzUm9rHmDY+05NtOyYauy6sKbEDmTbSeXn5eXhZ29TDxuPlPTTeOqd5Xrsdb1HI8fisDJh3KN4MCD5TlwdANURdfisG631v8ApOPF61mAByhiq+Fuc9WTrTyL729XuXjD9Ko0ybl6lNFPiWGU+YOU+k/Simfnjss2NTxOLpDORUo1hWdCAAtFBcsCfmYvlAA4C5PIT9DxpFrKJLywqRJECxJECmJIgIiJIRJeICIiAiIgccomIlkoWJIgWJIIgWfN25tmhg6RqV3C6HIlznqN0UDU/tO3WoBvtOPwuy/oZqHtPw/dYjMxdmc/VF6juUpBEuBc6DMXk44+V0W6m3x95dtU8RUGTvBTW+juSzMTdnIuQpJ5Dwnn61jwLe84mmOo4TXjx4z6Z8uTK/bp4lHGqm58bkjynSekRZhxn2Cb8eM69ehpp7SfDH6Rc8vt9fczeM4V2FSnnw7svfKLCopF8r02+8LnQ6EaHkRsLGV6b5KlJxVw1emSjqCFZk1KEHVXHNTqJphajUmuNVPEfznPS7A22+HJK/Hh6hU1KV7AlflcfdcdeYuDoZk5/jTPuftGr4/ybh1f1r7O+m7JwmJXE01PcVWUgj5QbWt+n84+FbSoSdPiN+oN9DNt4jeFa2Ep0S69wFCDvFz0aqWsEqMFL0mGmo4EXM1ftGhd2Gi1ByDK6sORDDRh0I0nOXbpZY7+z61Sm6VaRNPEUiHR0Otxzvz5+h1m/dy95htCiGZQlZQoqAWyk24rre0/OezsSQwBNmUjXmD18ptnsexAeviQy5aiop0OgBOot1vr4aybUa622tLeSIUJZIgJZIgWSIgIiICIiAiIgSIiBwgzKYwDJQyiSWAvF5LyXgZGaa7XajHHovJcNTyjkLs9z7zcd5qzthwmWthqwHz0npE+KNmH/cPtOvD+zny/q1oyzjJ9pzuZwt7TVpnYEdJi1QrqeHA/sZWNud+ul5g9mUgG+movciVq8ZYjDhhcf+Z0aLGi3Wm3Hw8Z3Nn1syW5jT2nJVohr6ceIj2j07+zcb3d1PxUagsw5eDTrbU2ewJIsGW5tpcrx9evv1nTw90Pdn5G+Q9D92ey2Bs5cfSWkXyV6BWkbgEth2+Gk4/AxCnwZOkzc2Gvyn92rhz3PC/2eJwNXM4JBDjQHS3HS89TuzvA+AxKVlCjMwSpnY5GTgQx+yOBvysDwnnlDI7plJqIzI1rXBBII18QZzdyxIzFAOFizEm/XSca6x+m9k7Rp4mktWnex0ZW0dHHFGHIj+hGhncml+zHeFcHUanXqlcKyBA7XsjAjuwegF2F+Q6AC25wbyVKsREIIiICIiAiIgIiICSWSAiS8kDjiQGUSVdpEpkhJERATw/a5QLYKk/3MQL+TI+vuB7z3E89v/h+82biQBcqq1PII6sx9gZfC6yiuc3jWhnnXdvCdmqJ12vNtZY4rX5TLKPOCSekoWV0tK6eHOSq68ibjpqNZ3g04cQhI+G5III4ddfyvIr8b6EaGV9Le3YemHBB5/l4z7G5+1vouKpVanyq3dYjo1F9C3tZvNZ8ag/OcrcVPX4G9eH56f3ovZOna3qQU8bikB7tvpFRjyuWObiPOfNp1av2iGHLQD9J2to4g16z1H1dqdAMTxZkpJTLeuS/rOGjpoJny4rXeckcr1iL30ATLblm0P7kTZG4PaF3eTC41r0QFSnWOrUraBX6p48R5cPDUN3zXNCp3hK1arUjSA1ChSc4bz0PnPtbc3XpqcTWw7LSoYWgC9yzrUrrcuoJOn2Bz+K/CRjcJ+FXy487PON7o4YAggqQCCCCCDwIPMTKaP3B37fBHuq+ergzoFFi9JvvJfkea38fPbuwNuUMfS77DlioYoyuMrowsbMLnkQZGWFxUxylfUiSJRZYkiBYkiAvERASGCZICJIkocV5ZjLJQsSSyAiSIIsjAEEEAgixB1BHQxEJaE312L9CxlSkAe6b6yjf/wDNuA9Ddf7s844m6+1HYf0jCfSFH12EBY/2qJtnHpo3oes0s4mzjy8sWXPHVcM7GBpo9WmlSoKVN3CtUIuKYP2iOk4Jy4PB1a9QU6KNUqG5yrbQDiSToB4mWt6MJ29seznOt6GNp1L/AC3S6t6qxtPLb17rYvBZXqIGptZWqU7sgblm009Z7Ld7s/qU2FWvimpEWNsMTTPiDUOpHkBPa4YUXVqYrLWp2KMGZaoPIqb3vPNy+Rljl73Hqf8AHxyn66r8/wBN7adJzYl7U79Pj/w/F+02Ttfs5wrFmw9buH1IX56N/Im6+h06TwG1dnVaDmjWQo2VgL6qy2tmU8CJq4+XHP0ycnFlh7cTWvcdPyOo/eYK2pnVpYoCmtzqBlPmNJ1xVepoo9eU6xwvT3e6e0CqtUtc0V7mlztUqHNm/Mf4Z3tt7w0qNL6KlJa11IYNqmY8alT7x1Nh69J4rA169KlkQgNnzltb3tYWH7zjp352vzuSb+pnHHg/LyyaMvk6x8cXLh6JUf6z1O5m9dTZtViU7yjUCiqgOVjY6Mt9AwubX0N7acR5mm3L5T48J26Yv58uk75SWaZ512/SGCxSVqaVabZqdVFdDa11YXGnKc0+JuamXZ2DH+7offW35z7QmO9VolWLxJISt4vJEIW8l4iAkiJIRJLA4BF5BLLKrLJEipWIiQgiIhO3Fi8Klam9GqoalVUo6nmrCxE/N2MUB3C3KBmUFrXIB0Jt1n6WmgN/8AcPtHEU0UrSLiqg+yVqAMbeFyw9PCduG+45cnbzrTu7C2pXwtdXw7orvake9ANKzMPn6AGxvytOix9ZgZ3s3NKYZXG7jaNbdtqxFTau0DUudKNNhTolfuhRqfMAGfX2dQwFCy4PCVSwBYMuHdQ7D/aVAAT43mndn4uphqyYii2StTvlawIsQQVIPEWJ0noanaFtM2y1KCnr3IP5XmDk4M/Uv+npYfJ4vdnf+W2aNRqguuHFLqCQSPDScO1NiU8TTKV6aup4dVPVSNQfETUjb9bUzi2KJ+BnZTTpinxFr5QD15z2W6naMtayYpVoswBRy47pwerNbK3gZwy4c8O/4dMebDPr+XzqnZZh1cnvcQaZJIF6ZKX5WK/F7idTbm4tXCUu/pMMRhx8xVMlWl+NLn3Bm0WxilM5Kina5YsMtvOfJxG8FCjUAeoooVFanWBIGW/y1LeGvoTL8Xy8pdX058vxcbNz205YSMgM+tvJs04bF1aVsqhiyDlkPC3hx9p81Reelt52mNNNNdZ9TYuy62IqrSoKajvwHAC3FieQHWdzdzdnEY5gtJLUwbPWYEUkHPXmfAazcu7u7uHwFPJRW7kWqVWA7yp68h4DT9Zzyz0vMdu5sjB/R8PRoXzGlSSmW5EgAE+87cRM1dVkiICIiSEREBEkhMCxJeIHBLMby3llWUSRIGUsxEQllEkRpBNYdtuHYJhK6JcXrUXYWuCQrIp/w1D7zZ81B2p7fapiThg31OGygrpZqxFyx8QGyjpr1l+KXyU5LqNaL9WCzC1yNOfnOQMCLg3B4GYYz47zDDNYZNLi5HlzE0OTlMlovELaYKNT1Y6n+zawE56IAAXkFAHpMFmYlNr6XGOzUjTzvlBDKmdsmbl8N7T026W+jYUtQxgq4nCNlWnqrvhjc3IDasuo0zaW0BnmgJUT4j5fnK2T6Wlr7W8m26eLxiPQRxRpUlw+ZwVNSzMykAkkAZran24T7u5G7P8A6hUKtUCUMPY1Lf8AuMKjMwRdNODanh6z4uxd18bihmw+GqVEvbPolO44gMxAM272e7rvs+lUasVOIrlcwQ5lRFvlW/M6sT5gcpFuoiTdenweFp0aa0qSBKSDKqrwA/nOc0ks4uhERAREkCxJBgWQmQmS8BJEl4FvExvEDhBlmEyvLaUZgyzjvLeBnF5jeWEsokvEA7hQWY2VQWYngANSZ+b9s4nvsRWrG/1tWpU1/tMTb85tntQ24KVAYRG+tr61AOK0BfQ/iIA8g005jDrpNHFj1tw5Mt3Tq1CJ1Kq63GhHCdliensZwk+BlsjFj3rdBJ3zdBLp/AYFv4DOer/66dMc5P8ABMlzTILOQCR4p2lN2n0cINRfWdRBad7CcvKXkVtb73C2VXwez6WGr1EqtTaoadRCxzUXcul8wBB+Lhr5mehnQ2JUzYXDN97D0T7os7t5mvt2jKJLxeQLLMbxeBZLxeSBbwTMYgWS8SEwEl5CZCYQskl4hLiEREu5rLEQlYEsSooliJKWju0Bido4q5JtUA1PIIthPJVeMRNs/WMn/auu/P0nEZYlKvigkWWJV0ZCZrERBk3Cd7C8pIkxWv0Pur/8DCf8tS/yifViJlvtonoiIkAIiICQxEBERAkxMRBQzExElDGIiQl//9k=', // Replace with an Indian face URL if available
    color: 'from-pink-500 to-rose-600',
    delay: 0.2
  },
  {
    name: 'Arjun Sharma',
    role: 'Marketing Manager',
    content: 'The modern templates and real-time preview feature made creating my resume a breeze.',
    image: 'data:image/jpeg;base64,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', // Replace with an Indian face URL if available
    color: 'from-violet-500 to-purple-600',
    delay: 0.4
  }
];


export default function LandingPage() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div 
                className="sm:text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Design Your</span>
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dream Resume & Cover Letter in Minutes
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Create stunning resumes and cover letters effortlessly with our AI-powered tool. Unlock professional templates and expert tips to make your profile stand out and land your dream job!
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <motion.div
                    className="rounded-md shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started Free
                    </Link>
                  </motion.div>
                  <motion.div
                    className="mt-3 sm:mt-0 sm:ml-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 md:py-4 md:text-lg md:px-10"
                    >
                      Sign In
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <motion.img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://media.istockphoto.com/id/1475088044/photo/cheerful-mid-adult-woman-along-with-her-coworkers-working-on-a-laptop-in-an-office-cubicle.jpg?s=612x612&w=0&k=20&c=StPTrPT6yJ3cpAXllpIo4PTaexP17ohTeqrPpgab3s8="
            alt="Person working on resume"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Everything you need to land your dream job
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              Our AI-powered platform makes it easy to craft standout resumes and cover letters that employers will love.
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-90 transform -rotate-2 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-110`} />
                  <div className="relative p-8 bg-gray-800 rounded-2xl transform rotate-2 group hover:rotate-0 transition-transform">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                        {feature.icon}
                      </div>
                      <motion.div
                        className="h-1 w-24 bg-gradient-to-r from-transparent to-blue-500 rounded"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: feature.delay + 0.3 }}
                      />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-300">
                      {feature.description}
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${feature.color}`}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, delay: feature.delay + 0.5 }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-400">100%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-white">
              Trusted by job seekers worldwide
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              See what our users have to say about their success stories
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: testimonial.delay }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-2xl opacity-90 transform -rotate-2 scale-105`} />
                <div className="relative p-8 bg-gray-900 rounded-2xl transform rotate-2">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full border-2 border-white"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-white">{testimonial.name}</div>
                      <div className="text-blue-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300">{testimonial.content}</p>
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: testimonial.delay + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to boost your career?</span>
              <span className="block">Start building your resume today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-200">
              Join thousands of professionals who have already landed their dream jobs using our platform.
            </p>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 sm:w-auto"
              >
                Get Started Free
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {[
              { icon: <FaTwitter className="h-6 w-6" />, href: '#', label: 'Twitter' },
              { icon: <FaGithub className="h-6 w-6" />, href: '#', label: 'GitHub' },
              { icon: <FaLinkedin className="h-6 w-6" />, href: '#', label: 'LinkedIn' }
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
                whileHover={{ scale: 1.2, color: '#60A5FA' }}
              >
                <span className="sr-only">{item.label}</span>
                {item.icon}
              </motion.a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Resume Builder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}