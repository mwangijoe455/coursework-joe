
const fs = require('fs');  // file system; reads/deletes files
require('datejs');         // imports current timelines

const combineUsers = function(...args) {     // (...) rest syntax for arraying
    const combinedObject = {
        users: []
    };
    
    for (let i = 0; i < args.length; i++) {
        combinedObject.users = [...combinedObject.users, ...args[i]];  //spread syntax for merging arrays
    }
    
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');
    return combinedObject;
};


const loadUsersFromJSON = function(filePath) {                      // reads from json file
    try {
        const data = fs.readFileSync(filePath, 'utf8');  // std character for web in encoding
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading JSON:', error.message);
        return null;
    }
};


const mergeUsersFromJSON = function(filePath) {
    const userData = loadUsersFromJSON(filePath);
    
    if (!userData) {
        return {
            users: [],
            merge_date: Date.today().toString('M/d/yyyy'),
            error: 'Failed to load JSON file'
        };
    }
    
    // Extract all teams from JSON
    const teams = [];
    
    // Check for 'teams' property
    if (userData.teams) {
        const keys = Object.keys(userData.teams);
        for (let i = 0; i < keys.length; i++) {
            if (Array.isArray(userData.teams[keys[i]])) {
                teams.push(userData.teams[keys[i]]);
            }
        }
    }
    
    // Check for 'platforms' property
    if (userData.platforms) {
        const keys = Object.keys(userData.platforms);
        for (let i = 0; i < keys.length; i++) {
            if (Array.isArray(userData.platforms[keys[i]])) {
                teams.push(userData.platforms[keys[i]]);
            }
        }
    }
    
    // If we found teams, merge them
    if (teams.length > 0) {
        const result = combineUsers(...teams);
        result.metadata = {
            sources: teams.length,
            sourceFile: filePath
        };
        return result;
    }
    
    return {
        users: [],
        merge_date: Date.today().toString('M/d/yyyy'),
        error: 'No user arrays found in JSON'
    };
};

module.exports = { combineUsers, loadUsersFromJSON, mergeUsersFromJSON };