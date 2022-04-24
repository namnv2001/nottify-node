const router = require('express').Router()
const zing = require('../../controller/ZingController')

router.get('/get-song', zing.getSong)
router.get('/playlist', zing.getPlaylist)
router.get('/home', zing.getHome)
router.get('/top100', zing.getTop100)
router.get('/chart-home', zing.getChartHome)
router.get('/chart-release', zing.getNewReleaseChart)
router.get('/info', zing.getInfo)
router.get('/artist', zing.getArtist)
router.get('/lyric', zing.getLyric)
router.get('/search', zing.search)
router.get('/listMV', zing.getListMV)
router.get('/category', zing.getCategoryMV)
router.get('/video', zing.getVideo)

module.exports = router
