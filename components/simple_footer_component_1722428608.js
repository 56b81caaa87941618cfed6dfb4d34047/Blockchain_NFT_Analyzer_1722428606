/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722428608", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 to-purple-700 dark:from-pink-600 dark:to-purple-900">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto dark:border-purple-500 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white dark:text-pink-200">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            NFTalyst - Blockchain NFT Analytics
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-pink-100 dark:text-purple-200">
                        Gain powerful insights into the latest NFT trends and collections across multiple blockchain networks. Stay ahead of the curve with real-time analytics and data visualization tools tailored for NFT enthusiasts and investors.
                    </div>
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <button class="bg-purple-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Hello World
                    </button>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
