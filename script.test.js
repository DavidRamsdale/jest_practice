const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'disneydog.com',
    'pictures.com'
]

describe('googleSearch', () => {
    it("is searching google", () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'disneydog.com']);
        expect(googleSearch('dis', dbMock)).toEqual(['disney.com', 'disneydog.com']);
    })
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('does not return more than three matches', () => {
        expect(googleSearch(".com", dbMock).length).toEqual(3);    
    })
})

