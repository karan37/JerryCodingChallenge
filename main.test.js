const RangeList = require('./main');

test('test getRangesFromNumberList', () => {
    const r0 = new RangeList()
    let result = r0.getRangesFromNumberList([1, 2, 3, 6, 8, 9])
    let expected = [[1, 4], [6, 7], [8, 10] ]
    expect(result).toStrictEqual(expected);

    result = r0.getRangesFromNumberList([])
    expected = []
    expect(result).toStrictEqual(expected);

    result = r0.getRangesFromNumberList([1,3,5,7,9])
    expected = [[1,2],[3,4],[5,6],[7,8],[9,10]]
    expect(result).toStrictEqual(expected);

});