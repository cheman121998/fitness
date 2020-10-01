import { dataCard } from './Data';
export const getDataCard = async (callback) => {
    try {
        await setTimeout(() => {}, 2000);

        const data = dataCard;
    } catch (error) {
        console.log('============GET ERROR================');
        console.log(error.message);
        console.log('====================================');
    }
};
