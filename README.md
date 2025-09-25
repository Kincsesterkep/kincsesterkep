<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I love you, Alina!</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .competition-card {
            transition: all 0.3s ease;
            transform-style: preserve-3d;
        }
        .competition-card:hover {
            transform: translateY(-5px) rotateX(5deg);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }
        .clue-reveal {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
</head>
<body class="bg-amber-50 font-sans">
    <!-- Navigation -->
    <nav class="bg-amber-900 text-amber-50 shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-map-marked-alt text-2xl"></i>
                <span class="text-xl font-bold">TreasureQuest</span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#competitions" class="hover:text-amber-200 transition">Competitions</a>
                <a href="#about" class="hover:text-amber-200 transition">About</a>
                <a href="#faq" class="hover:text-amber-200 transition">FAQ</a>
            </div>
            <button class="md:hidden text-xl" id="mobile-menu-button">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        <!-- Mobile menu -->
        <div class="md:hidden hidden bg-amber-800 px-4 py-2" id="mobile-menu">
            <a href="#competitions" class="block py-2 hover:text-amber-200">Competitions</a>
            <a href="#about" class="block py-2 hover:text-amber-200">About</a>
            <a href="#faq" class="block py-2 hover:text-amber-200">FAQ</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="parallax-bg bg-[url('https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80')] relative">
        <div class="bg-black bg-opacity-60 py-32">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-6xl font-bold text-amber-50 mb-6">Treasure Hunt Championships</h1>
                <p class="text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">Unlock hidden clues, solve ancient riddles, and claim your prize in one of our thrilling treasure hunt competitions!</p>
                <a href="#competitions" class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block transform hover:scale-105">
                    Explore Challenges <i class="fas fa-arrow-down ml-2"></i>
                </a>
            </div>
        </div>
    </header>

    <!-- Competitions Section -->
    <section id="competitions" class="py-16 bg-amber-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">Choose Your Adventure</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Competition 1 -->
                <div class="competition-card bg-white rounded-xl overflow-hidden shadow-lg">
                    <div class="h-48 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-amber-800 mb-2">The Lost Pirate Gold</h3>
                        <p class="text-gray-600 mb-4">Follow the trail of Captain Blackbeard's hidden treasure through coastal towns and cryptic maps.</p>
                        <div class="mb-4">
                            <span class="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Difficulty: Medium</span>
                            <span class="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Duration: 3 days</span>
                        </div>
                        <button class="reveal-clue-btn bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition w-full" data-clue="1">
                            Reveal First Clue <i class="fas fa-eye ml-2"></i>
                        </button>
                        <div id="clue-1" class="clue-reveal mt-4 hidden p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <h4 class="font-bold text-amber-800 mb-2">First Clue:</h4>
                            <p>"Where waves crash against ancient stones, seek the tavern where sailors once moaned. Look for the sign with a broken crown, your next clue lies somewhere down."</p>
                        </div>
                        <button class="signup-btn mt-4 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg transition w-full">
                            Sign Up <i class="fas fa-sign-in-alt ml-2"></i>
                        </button>
                    </div>
                </div>

                <!-- Competition 2 -->
                <div class="competition-card bg-white rounded-xl overflow-hidden shadow-lg">
                    <div class="h-48 bg-[url('https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-amber-800 mb-2">Pharaoh's Forgotten Tomb</h3>
                        <p class="text-gray-600 mb-4">Decode hieroglyphics and navigate ancient ruins to uncover the burial chamber's secrets.</p>
                        <div class="mb-4">
                            <span class="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Difficulty: Hard</span>
                            <span class="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Duration: 5 days</span>
                        </div>
                        <button class="reveal-clue-btn bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition w-full" data-clue="2">
                            Reveal First Clue <i class="fas fa-eye ml-2"></i>
                        </button>
                        <div id="clue-2" class="clue-reveal mt-4 hidden p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <h4 class="font-bold text-amber-800 mb-2">First Clue:</h4>
                            <p>"When the sun kisses the horizon at dawn, count the pillars where the jackals yawn. The third from the left holds a secret mark, that will guide you through the dark."</p>
                        </div>
                        <button class="signup-btn mt-4 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg transition w-full">
                            Sign Up <i class="fas fa-sign-in-alt ml-2"></i>
                        </button>
                    </div>
                </div>

                <!-- Competition 3 -->
                <div class="competition-card bg-white rounded-xl overflow-hidden shadow-lg">
                    <div class="h-48 bg-[url('https://images.unsplash.com/photo-1530046339916-102c1e13d5f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-amber-800 mb-2">The Dragon's Hoard</h3>
                        <p class="text-gray-600 mb-4">Navigate medieval castles and decipher knightly codes to find the legendary dragon's treasure.</p>
                        <div class="mb-4">
                            <span class="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Difficulty: Medium</span>
                            <span class="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Duration: 4 days</span>
                        </div>
                        <button class="reveal-clue-btn bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition w-full" data-clue="3">
                            Reveal First Clue <i class="fas fa-eye ml-2"></i>
                        </button>
                        <div id="clue-3" class="clue-reveal mt-4 hidden p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <h4 class="font-bold text-amber-800 mb-2">First Clue:</h4>
                            <p>"Where the banners of red and gold once flew, find the shield with a dent askew. Beneath the stone where the raven calls, your journey to riches begins in these halls."</p>
                        </div>
                        <button class="signup-btn mt-4 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg transition w-full">
                            Sign Up <i class="fas fa-sign-in-alt ml-2"></i>
                        </button>
                    </div>
                </div>

                <!-- Competition 4 -->
                <div class="competition-card bg-white rounded-xl overflow-hidden shadow-lg">
                    <div class="h-48 bg-[url('https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"></div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-amber-800 mb-2">The Arctic Expedition</h3>
                        <p class="text-gray-600 mb-4">Follow the trail of a lost explorer through frozen wastelands to recover a priceless artifact.</p>
                        <div class="mb-4">
                            <span class="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Difficulty: Hard</span>
                            <span class="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Duration: 7 days</span>
                        </div>
                        <button class="reveal-clue-btn bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition w-full" data-clue="4">
                            Reveal First Clue <i class="fas fa-eye ml-2"></i>
                        </button>
                        <div id="clue-4" class="clue-reveal mt-4 hidden p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <h4 class="font-bold text-amber-800 mb-2">First Clue:</h4>
                            <p>"Where the northern lights dance in the sky, find the cabin where the old man would lie. In his journal on page forty-two, the coordinates will guide you true."</p>
                        </div>
                        <button class="signup-btn mt-4 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg transition w-full">
                            Sign Up <i class="fas fa-sign-in-alt ml-2"></i>
                        </button>
                    </div>
                </div>

                <!-- Competition 5 -->
                <div class="competition-card bg-white rounded-xl overflow-hidden shadow-lg">
                    <div class="h-48 bg-[url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-amber-800 mb-2">The Urban Treasure Trail</h3>
                        <p class="text-gray-600 mb-4">Solve modern puzzles hidden in plain sight across the city to uncover a contemporary fortune.</p>
                        <div class="mb-4">
                            <span class="inline-block bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Difficulty: Easy</span>
                            <span class="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Duration: 2 days</span>
                        </div>
                        <button class="reveal-clue-btn bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition w-full" data-clue="5">
                            Reveal First Clue <i class="fas fa-eye ml-2"></i>
                        </button>
                        <div id="clue-5" class="clue-reveal mt-4 hidden p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <h4 class="font-bold text-amber-800 mb-2">First Clue:</h4>
                            <p>"Where the clock strikes twelve but never chimes, find the mural of forgotten times. The artist left a hidden code, in the colors of the rainbow road."</p>
                        </div>
                        <button class="signup-btn mt-4 bg-amber-800 hover:bg-amber-900 text-white py-2 px-4 rounded-lg transition w-full">
                            Sign Up <i class="fas fa-sign-in-alt ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-amber-800 text-amber-50">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">About TreasureQuest</h2>
                    <p class="text-lg mb-4">TreasureQuest brings you the most exciting treasure hunt competitions around the world. Each adventure is carefully crafted to challenge your problem-solving skills while immersing you in captivating stories.</p>
                    <p class="text-lg mb-4">Our competitions blend history, mystery, and adventure to create unforgettable experiences. Whether you're a seasoned treasure hunter or a curious beginner, we have challenges suited for all levels.</p>
                    <p class="text-lg">Sign up today and embark on a journey that will test your wit, perseverance, and sense of adventure!</p>
                </div>
                <div class="md:w-1/2">
                    <div class="bg-amber-700 p-6 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold mb-4">How It Works</h3>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="bg-amber-600 rounded-full p-2 mr-4">
                                    <i class="fas fa-search text-white"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">1. Choose Your Challenge</h4>
                                    <p>Select from our diverse range of treasure hunt competitions.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-amber-600 rounded-full p-2 mr-4">
                                    <i class="fas fa-user-plus text-white"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">2. Register Your Team</h4>
                                    <p>Sign up individually or with friends (1-4 people per team).</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-amber-600 rounded-full p-2 mr-4">
                                    <i class="fas fa-map-marked-alt text-white"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">3. Receive Your First Clue</h4>
                                    <p>Get your starting point and initial puzzle to solve.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-amber-600 rounded-full p-2 mr-4">
                                    <i class="fas fa-trophy text-white"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">4. Complete the Hunt</h4>
                                    <p>Follow the trail, solve all clues, and claim your prize!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-16 bg-amber-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">Frequently Asked Questions</h2>
            
            <div class="max-w-3xl mx-auto">
                <div class="mb-6">
                    <button class="faq-question w-full text-left bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-3 px-6 rounded-lg transition flex justify-between items-center">
                        <span>Do I need any special equipment?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden bg-white p-6 rounded-b-lg shadow">
                        <p>Most competitions only require a smartphone with internet access. Some outdoor adventures might recommend comfortable shoes and weather-appropriate clothing. Specific requirements will be listed in the competition details.</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <button class="faq-question w-full text-left bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-3 px-6 rounded-lg transition flex justify-between items-center">
                        <span>Can I participate alone or do I need a team?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden bg-white p-6 rounded-b-lg shadow">
                        <p>You can participate alone or in teams of up to 4 people. Some people enjoy the challenge of solving clues independently, while others prefer collaborating with friends. Team registration often provides a small discount.</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <button class="faq-question w-full text-left bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-3 px-6 rounded-lg transition flex justify-between items-center">
                        <span>Are the competitions physically demanding?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden bg-white p-6 rounded-b-lg shadow">
                        <p>Difficulty varies by competition. Urban treasure hunts typically involve walking around a city, while some wilderness adventures may require hiking. Each competition's physical requirements are clearly indicated in its description.</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <button class="faq-question w-full text-left bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-3 px-6 rounded-lg transition flex justify-between items-center">
                        <span>What happens if I can't solve a clue?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden bg-white p-6 rounded-b-lg shadow">
                        <p>We provide a hint system for each clue. After a set time without progress, you can request increasingly helpful hints. Our goal is to keep the challenge enjoyable while ensuring everyone can eventually progress.</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <button class="faq-question w-full text-left bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-3 px-6 rounded-lg transition flex justify-between items-center">
                        <span>What kind of prizes can I win?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="faq-answer hidden bg-white p-6 rounded-b-lg shadow">
                        <p>Prizes vary by competition and may include cash rewards, unique experiences, or valuable artifacts related to the treasure hunt theme. All participants receive a certificate of completion and often small souvenirs from the adventure.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Signup Modal -->
    <div id="signup-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
            <button id="close-modal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <i class="fas fa-times text-xl"></i>
            </button>
            <h3 class="text-2xl font-bold text-amber-800 mb-6">Join the Treasure Hunt</h3>
            <form id="signup-form">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                </div>
                <div class="mb-4">
                    <label for="competition" class="block text-gray-700 font-medium mb-2">Competition</label>
                    <select id="competition" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                        <option value="">Select a competition</option>
                        <option value="The Lost Pirate Gold">The Lost Pirate Gold</option>
                        <option value="Pharaoh's Forgotten Tomb">Pharaoh's Forgotten Tomb</option>
                        <option value="The Dragon's Hoard">The Dragon's Hoard</option>
                        <option value="The Arctic Expedition">The Arctic Expedition</option>
                        <option value="The Urban Treasure Trail">The Urban Treasure Trail</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label for="team-size" class="block text-gray-700 font-medium mb-2">Team Size</label>
                    <select id="team-size" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                        <option value="1">1 (Solo)</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition">
                    Register Now <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </form>
        </div>
    </div>

    <!-- Success Modal -->
    <div id="success-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center">
            <div class="text-green-500 text-6xl mb-4">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h3>
            <p class="text-gray-600 mb-6">Thank you for signing up for our treasure hunt competition. We've sent confirmation details to your email address.</p>
            <button id="close-success-modal" class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition">
                Continue Exploring
            </button>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-amber-900 text-amber-200 py-12">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-8 md:mb-0">
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-map-marked-alt text-2xl"></i>
                        <span class="text-xl font-bold text-amber-50">TreasureQuest</span>
                    </div>
                    <p class="max-w-xs">Embark on unforgettable adventures and uncover hidden treasures around the world.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h4 class="text-lg font-bold text-amber-50 mb-4">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="#competitions" class="hover:text-amber-100 transition">Competitions</a></li>
                            <li><a href="#about" class="hover:text-amber-100 transition">About Us</a></li>
                            <li><a href="#faq" class="hover:text-amber-100 transition">FAQ</a></li>
                            <li><a href="#" class="hover:text-amber-100 transition">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-amber-50 mb-4">Contact</h4>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-envelope mt-1 mr-2"></i>
                                <span>info@treasurequest.com</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-phone-alt mt-1 mr-2"></i>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-map-marker-alt mt-1 mr-2"></i>
                                <span>123 Adventure Lane, Treasure City</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-amber-50 mb-4">Follow Us</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="text-2xl hover:text-amber-100 transition"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="text-2xl hover:text-amber-100 transition"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-2xl hover:text-amber-100 transition"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="text-2xl hover:text-amber-100 transition"><i class="fab fa-youtube"></i></a>
                        </div>
                        <div class="mt-6">
                            <p class="text-sm">Subscribe to our newsletter</p>
                            <div class="flex mt-2">
                                <input type="email" placeholder="Your email" class="px-3 py-2 rounded-l-lg bg-amber-800 text-white border border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500">
                                <button class="bg-amber-600 hover:bg-amber-700 px-4 rounded-r-lg transition">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t border-amber-800 mt-12 pt-6 text-center text-sm">
                <p>&copy; 2023 TreasureQuest. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Reveal clue functionality
        document.querySelectorAll('.reveal-clue-btn').forEach(button => {
            button.addEventListener('click', function() {
                const clueId = this.getAttribute('data-clue');
                const clueElement = document.getElementById(`clue-${clueId}`);
                
                // Toggle clue visibility
                if (clueElement.classList.contains('hidden')) {
                    clueElement.classList.remove('hidden');
                    this.innerHTML = 'Hide Clue <i class="fas fa-eye-slash ml-2"></i>';
                } else {
                    clueElement.classList.add('hidden');
                    this.innerHTML = 'Reveal First Clue <i class="fas fa-eye ml-2"></i>';
                }
            });
        });

        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                // Toggle answer visibility
                if (answer.classList.contains('hidden')) {
                    answer.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                } else {
                    answer.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                }
            });
        });

        // Signup modal functionality
        const signupModal = document.getElementById('signup-modal');
        const successModal = document.getElementById('success-modal');
        const signupButtons = document.querySelectorAll('.signup-btn');
        const closeModal = document.getElementById('close-modal');
        const closeSuccessModal = document.getElementById('close-success-modal');
        const signupForm = document.getElementById('signup-form');

        signupButtons.forEach(button => {
            button.addEventListener('click', function() {
                signupModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });

        closeModal.addEventListener('click', function() {
            signupModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        closeSuccessModal.addEventListener('click', function() {
            successModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to your server
            // For this example, we'll just show the success modal
            
            signupModal.classList.add('hidden');
            successModal.classList.remove('hidden');
            
            // Reset form
            this.reset();
        });

        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === signupModal) {
                signupModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
            if (e.target === successModal) {
                successModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    </script>
</body>
</html>
