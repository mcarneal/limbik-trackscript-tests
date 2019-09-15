require('dotenv').config();
const { Builder, By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const { assert, equal } = require('chai');
const collectSessionData = require('../Actions/vimeoPlayerActions.js').collectSessionData
const findStartEvent = require("../Actions/vimeoPlayerActions.js").findStartEvent
const findMuteStatus = require("../Actions/vimeoPlayerActions.js").findMuteStatus
const detectVideoType = require("../Actions/vimeoPlayerActions.js").detectVideoType
const findPlayEvent = require("../Actions/vimeoPlayerActions.js").findPlayEvent
const findPauseEvent = require("../Actions/vimeoPlayerActions.js").findPauseEvent
const find25PercentPlayback = require("../Actions/vimeoPlayerActions.js").find25PercentPlayback
const find50PercentPlayback = require("../Actions/vimeoPlayerActions.js").find50PercentPlayback
const find75PercentPlayback = require("../Actions/vimeoPlayerActions.js").find75PercentPlayback
const findLimbikAttentionScore = require("../Actions/vimeoPlayerActions.js").findLimbikAttentionScore
const findLimbikRating = require("../Actions/vimeoPlayerActions.js").findLimbikRating
const findLimbikAudioEngagement = require("../Actions/vimeoPlayerActions.js").findLimbikAudioEngagement
const findLimbikVideoEngagement = require("../Actions/vimeoPlayerActions.js").findLimbikVideoEngagement
const findLimbikVideoProportion = require("../Actions/vimeoPlayerActions.js").findLimbikVideoProportion
const findBrowserId = require("../Actions/vimeoPlayerActions.js").findBrowserId
const findDomain = require("../Actions/vimeoPlayerActions.js").findDomain
const findLocalIp = require("../Actions/vimeoPlayerActions.js").findLocalIp
const findPage = require("../Actions/vimeoPlayerActions.js").findPage
const findViewerId = require("../Actions/vimeoPlayerActions.js").findViewerId



let STORGAE;
let EVENTS;



describe('Check that trackscipt is recording events on vimeo players', function () {

    const mochaAsync = (fn) => {
        return (done) => {
            fn.call().then(done, (err) => {
                console.log(err)
                done(err)
            });
        };
    };

    // local driver
    // const driver = new Builder().forBrowser('chrome').build();

    const capabilities = {
        'os' : 'Windows',
        'os_version' : '10',
        'browserName' : 'Chrome',
        'browser_version' : '76.0',
        'browserstack.selenium_version': '3.10.0',
        'resolution': '1024x768',
        'browserstack.user': process.env.BROWSERSTACKID,
        'browserstack.key': process.env.BROWSERSTACKKEY,
        'name': 'Bstack-[Node] Sample Test',
        'browserstack.local': 'true',
        'browserstack.debug': 'true'
    }


    // BrowserStack Driver
    const driver = new webdriver.Builder().
        usingServer('http://hub-cloud.browserstack.com/wd/hub').
        withCapabilities(capabilities).
        build();

    it('Should wait for video to load and then interact with the dom', mochaAsync(async function () {
        await driver.get(process.env.BS_LOCAL)
        await driver.wait(until.elementLocated(By.id('test-button')));
        await driver.executeScript('window.LOGGING_LEVEL="testing"')
        await driver.findElement(By.id('test-button')).click()
        // await driver.sleep(15000)

    }))

    it('Should start the video', mochaAsync(async function () {
        await driver.wait(until.elementLocated(By.id('play-button')))
        await driver.findElement(By.id('play-button')).click()
    }))

    it('Should start the play the video for 5 seconds', mochaAsync(async function () {
        await driver.sleep(5000)
    }))

    it('Should pause the video', mochaAsync(async function () {
        await driver.wait(until.elementLocated(By.id('pause-button')))
        await driver.findElement(By.id('pause-button')).click()
        await driver.sleep(1000)
    }))

    it('Should mute the volume', mochaAsync(async function () {
        await driver.wait(until.elementLocated(By.id('mute')))
        await driver.findElement(By.id('mute')).click()
        await driver.sleep(1000)
    }))

    it('Should jump to 25%', mochaAsync(async function () {
        await driver.wait(until.elementLocated(By.id('jump-25')))
        await driver.findElement(By.id('jump-25')).click()
        await driver.sleep(1000)
    }))

    it('Should jump to 50%', mochaAsync(async function () {
        await driver.wait(until.elementLocated(By.id('jump-50')))
        await driver.findElement(By.id('jump-50')).click()
        await driver.sleep(1000)
    }))

    it('Should jump to 75%', mochaAsync(async function () {
        await driver.wait(until.elementLocated(By.id('jump-75')))
        await driver.findElement(By.id('jump-75')).click()
        await driver.sleep(1000)
    }))

    it('Should finish video engagement', mochaAsync(async function () {
        await driver.wait(until.elementLocated(By.id('done')))
        await driver.sleep(2000)
    }))

    it('Should grab the session storage data', mochaAsync(async function () {
        STORAGE = await driver.executeScript('return sessionStorage')
        EVENTS = await collectSessionData(STORAGE)
    }))

    it('Should show on the Limbik-Track script that the video has started', mochaAsync(async function () {

        const hasStarted = await findStartEvent(EVENTS)
        assert.equal(hasStarted, 'started', '== should be started')

    }))
    it('Should grab the session storage data', mochaAsync(async function () {
        STORAGE = await driver.executeScript('return sessionStorage')
        EVENTS = await collectSessionData(STORAGE)
    }))

    it('Should detect that the video type is vimeo', mochaAsync(async function () {
        const videoType = detectVideoType(EVENTS)
        assert.equal(videoType, 'vimeo', '== should be vimeo')
    }))


    it('Should show on the Limbik-Track script that the video is playing', mochaAsync(async function () {
        const hasPlayed = await findPlayEvent(EVENTS)
        assert.equal(hasPlayed, 'playing', '== should be playing')

    }))

    it('Should show on the Limbik-Track script that the video has paused', mochaAsync(async function () {

        const hasPaused = await findPauseEvent(EVENTS)
        assert.equal(hasPaused, 'paused', '== should be paused')
    }))

    it('Should show on the Limbik-Track script that the video has jumped to 25%', mochaAsync(async function () {

        const percentPlayed = await find25PercentPlayback(EVENTS)
        assert.equal(percentPlayed, '25percent', '== should be 25percent')
    }))

    it('Should show on the Limbik-Track script that the video has jumped to 50%', mochaAsync(async function () {

        const percentPlayed = await find50PercentPlayback(EVENTS)
        assert.equal(percentPlayed, '50percent', '== should be 50percent')
    }))

    it('Should show on the Limbik-Track script that the video has jumped to 75%', mochaAsync(async function () {

        const percentPlayed = await find75PercentPlayback(EVENTS)
        assert.equal(percentPlayed, '75percent', '== should be 75percent')
    }))

    it('Should show on the Limbik-Track script that the video has muted', mochaAsync(async function () {

        const hasMuted = await findMuteStatus(EVENTS)
        assert.equal(hasMuted, true, '== should be true')
    }))

    it('Should show on the Limbik-Track script that there is an attention score present', mochaAsync(async function () {

        const attentionScore = await findLimbikAttentionScore(EVENTS)
        assert.equal(attentionScore, true, '== should be true')
    }))

    it('Should show on the Limbik-Track script that there is an audio engament score present', mochaAsync(async function () {

        const audioEngagement = await findLimbikAudioEngagement(EVENTS)
        assert.equal(audioEngagement, true, '== should be true')
    }))

    it('Should show on the Limbik-Track script that there is an rating score present', mochaAsync(async function () {

        const rating = await findLimbikRating(EVENTS)
        assert.equal(rating, true, '== should be true')
    }))

    it('Should show on the Limbik-Track script that there is an limbik video engagement score present', mochaAsync(async function () {

        const videoEngagement = await findLimbikVideoEngagement(EVENTS)
        assert.equal(videoEngagement, true, '== should be true')
    }))
    it('Should show on the Limbik-Track script that there is an video-proportion score present', mochaAsync(async function () {
        const limbikVideoProportion = await findLimbikVideoProportion(EVENTS)
        assert.equal(limbikVideoProportion, true, '== should be true')
    }))
    it('Should show on the Limbik-Track script that there browser id in the metadata', mochaAsync(async function () {
        const browserId = await findBrowserId(EVENTS)
        assert.equal(browserId, true, '== should be true')
    }))
    it('Should show on the Limbik-Track script that there is local IP present in the metadata', mochaAsync(async function () {
        const ipAdress = await findLocalIp(EVENTS)
        assert.equal(ipAdress, true, '== should be true')
    }))
    it('Should show on the Limbik-Track script that there is page present in the metadata', mochaAsync(async function () {
        const page = await findPage(EVENTS)
        assert.equal(page, true, '== should be true')
    }))
    it('Should show on the Limbik-Track script that there is viewerID present in the metadata', mochaAsync(async function () {
        const viewerId = await findViewerId(EVENTS)
        assert.equal(viewerId, true, '== should be true')
    }))

    after(async () => driver.quit());
});
