require('dotenv').config();


module.exports = class TrackScriptAnalyzer {

    static collectSessionData(storage){
        console.log('logging storage',storage)
        const events = []
        storage.forEach((event) => {
            events.push(JSON.parse(event))
        })
        return events
    }

    static testSome(text) {
        console.log(text)
    }


    static findStartEvent(events) {
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

    static findPlayEvent(events) {
        let result;
        for (let i = 0 ; events.length > i ; i ++) {
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

    static findPauseEvent(events) {
        let results;
        for(let i = 0 ; events.length > i ; i++){
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

    static find25PercentPlayback(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === '25percent') {
                results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
                break
            }
            else {
                results = 'no event for 25% found'
            }
        }
        return results
    }

    static find50PercentPlayback(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === '50percent') {
                results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
                break
            }
            else {
                results = 'no event for 50% found'
            }
        }
        return results
    }

    static find75PercentPlayback(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType === '75percent') {
                results = events[i][`video_interaction_${process.env.NODE_ENV}`].Event.eventType
                break
            }
            else {
                results = 'no event for 75% found'
            }
        }
        return results
    }

    static findLimbikAttentionScore(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik.attentionScore) {
                results = true
                break
            }
            else {
                results = 'no event attentionScore found'
            }
        }
        return results
    }

    static findLimbikAudioEngagement(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['audio-engagement']) {
                results = true
                break
            }
            else {
                results = 'no audio engagement found'
            }
        }
        return results
    }

    static findMuteStatus(events) {
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

    static detectVideoType(events) {
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

    static findLimbikRating(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['rating']) {
                results = true
                break
            }
            else {
                results = 'no rating found'
            }
        }
        return results 
    } 

    static findLimbikVideoEngagement(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['video-engagement']) {
                results = true
                break
            }
            else {
                results = 'no video engagement found'
            }
        }
        return results
    }

    static findLimbikVideoProportion(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.limbik['video-proportion']) {
                results = true
                break
            }
            else {
                results = 'no video proportions found'
            }
        }
        return results
    }

    static findBrowserId(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`].Event.metaData['browserId']) {
                results = true
                break
            }
            else {
                results = 'no domain found'
            }
        }
        return results
    }

    static findDomain(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]["metaData"]) {
                events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]["metaData"]["domain"].length > 1 ? results = true : results = events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]["metaData"]["domain"]
                break
            }
            else {
                results = 'no domain found'
            }
        }
        return results
    }

    static findLocalIp(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]['metaData']["local-ip-address"]) {
                results = true
                break
            }
            else {
                results = false
            }
        }
        return results
    }

    static findPage(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]['metaData']["page"]) {
                results = true
                break
            }
            else {
                results = false
            }
        }
        return results
    }

    static findViewerId(events) {
        let results;
        for (let i = 0 ; events.length > i ; i++) {
            if (events[i][`video_interaction_${process.env.NODE_ENV}`] && events[i][`video_interaction_${process.env.NODE_ENV}`]["Event"]['metaData']["viewerId"]) {
                results = true
                break
            }
            else {
                results = false
            }
        }
        return results
    }
}
