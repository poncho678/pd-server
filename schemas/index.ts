import about from './about.schema'
import contact from './contact.schema'
import imprint from './imprint.schema'
import privacy from './privacy.schema'
import projects from './projects.schema'

import {stillsType} from './customTypes/stillsType'
import {videoType} from './customTypes/videoType'
import {synopsisType} from './customTypes/synopsisType'
import {loglineType} from './customTypes/loglineType'
import {teamType} from './customTypes/teamType'
import {listType} from './customTypes/listsType'

const schemas = [about, contact, imprint, privacy, projects]
const types = [listType, loglineType, stillsType, synopsisType, teamType, videoType]

export const schemaTypes = [...schemas, ...types]
