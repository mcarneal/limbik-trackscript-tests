require('dotenv').config();

const collectSessionData =(storage)=> {
    const events = []
    Object.keys(storage).map((testNumber) => {
        if (storage[testNumber].length > 1) {
            events.push(JSON.parse(storage[testNumber]))
        }
    })
    return events
}

module.exports.collectSessionData = collectSessionData

const findStartEvent = (events) => {
    let results;
    for(let i = 0 ; events.length > i ; i++) {
        if(events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === 'started'){
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
            break    
        }
        else{
            results = 'no start events found'
        }
    }
    return results
}
module.exports.findStartEvent = findStartEvent

const findPlayEvent = (events) => {
    let result;
    for (i = 0 ; events.length > i ; i ++) {
       if (events[i][`video_playing_${process.env.NODE_ENV}`]){
            result = events[i][`video_playing_${process.env.NODE_ENV}`].Event.eventType
            break
       }
       else {
           result = 'No playing events found'
       }
    }
    return result
}
module.exports.findPlayEvent = findPlayEvent

const findPauseEvent = (events) => {
    let results;
    for(i = 0 ; events.length > i ; i++){
        if(events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === 'paused'){
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
            break    
        }
        else{
            results = 'no pause events found'
        }
    }
    return results
}
module.exports.findPauseEvent = findPauseEvent

const find25PercentPlayback = (events) => {
    let result;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === '25percent') {
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
            break
        }
        else {
            reuslts = 'no event for 25% found'
        }
    }
    return results
}

module.exports.find25PercentPlayback = find25PercentPlayback

const find50PercentPlayback = (events) => {
    let result;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === '50percent') {
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
            break
        }
        else {
            reuslts = 'no event for 50% found'
        }
    }
    return results
}

module.exports.find50PercentPlayback = find50PercentPlayback

const find75PercentPlayback = (events) => {
    let result;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === '75percent') {
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
            break
        }
        else {
            reuslts = 'no event for 75% found'
        }
    }
    return results
}

module.exports.find75PercentPlayback = find75PercentPlayback

const findLimbikAttentionScore = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik.attentionScore) {
            results = true
            break
        }
        else {
            reuslts = 'no event attentionScore found'
        }
    }
    return results

}
module.exports.findLimbikAttentionScore = findLimbikAttentionScore

const findLimbikAudioEngagement = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['audio-engagement']) {
            results = true
            break
        }
        else {
            reuslts = 'no audio engagement found'
        }
    }
    return results
}

module.exports.findLimbikAudioEngagement = findLimbikAudioEngagement

const findMuteStatus = (events) => {
    let results;
    for(let i = 0 ; events.length > i ; i++) {
        if(events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.player['is-muted'] === true){
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.player['is-muted']
            break    
        }
        else{
            results = 'player is not muted'
        }
    }
    return results
}

module.exports.findMuteStatus = findMuteStatus

const detectVideoType = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`].Event.video.type === 'vimeo') {
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.video.type
            break
        }
        else {
            results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.video.type
        }
    }
    return results 
}
module.exports.detectVideoType = detectVideoType


const findLimbikRating = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['rating']) {
            results = true
            break
        }
        else {
            reuslts = 'no rating found'
        }
    }
    return results

} 
module.exports.findLimbikRating = findLimbikRating

const findLimbikVideoEngagement = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['video-engagement']) {
            results = true
            break
        }
        else {
            reuslts = 'no video engagement found'
        }
    }
    return results

}
module.exports.findLimbikVideoEngagement = findLimbikVideoEngagement

const findLimbikVideoProportion = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['video-proportion']) {
            results = true
            break
        }
        else {
            reuslts = 'no video proportions found'
        }
    }
    return results
}

module.exports.findLimbikVideoProportion = findLimbikVideoProportion

const findBrowserId = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.metaData['browserId']) {
            results = true
            break
        }
        else {
            reuslts = 'no domain found'
        }
    }
    return results
}

module.exports.findBrowserId = findBrowserId

const findDomain = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]["metaData"]) {
            events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]["metaData"]["domain"].length > 1 ? results = true : results = events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]["metaData"]["domain"]
            break
        }
        else {
            reuslts = 'no domain found'
        }
    }
    return results
}

module.exports.findDomain = findDomain

const findLocalIp = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]['metaData']["local-ip-address"]) {
            results = true
            break
        }
        else {
            reuslts = false
        }
    }
    return results
}

module.exports.findLocalIp = findLocalIp

const findPage = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]['metaData']["page"]) {
            results = true
            break
        }
        else {
            reuslts = false
        }
    }
    return results
}

module.exports.findPage = findPage

const findViewerId = (events) => {
    let results;
    for (let i = 0 ; events.length > i ; i++) {
        if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]['metaData']["viewerId"]) {
            results = true
            break
        }
        else {
            reuslts = false
        }
    }
    return results
}
module.exports.findViewerId = findViewerId