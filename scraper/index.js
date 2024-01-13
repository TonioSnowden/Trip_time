// import the scraper functions from the scraper files in the folder
// and export them as a single object
// in each module, the function is called scrape
import scrape from './flatfox';

export default {
    flatfox:scrape
};