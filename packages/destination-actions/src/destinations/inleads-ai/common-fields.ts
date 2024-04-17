import { ActionDefinition } from '@segment/actions-core'
import { Settings } from './generated-types'

export const commonFields: ActionDefinition<Settings>['fields'] = {
  userMeta: {
    label: 'User Metadata',
    type: 'object',
    description: 'User metadata including IP, Location, etc.',
    default: {
      ip: { '@path': '$.context.ip' },
      latitude: { '@path': '$.context.location.latitude' },
      longitude: { '@path': '$.context.location.longitude' },
      country: { '@path': '$.context.location.country' },
      city: { '@path': '$.context.location.city' },
      browser: { '@path': '$.context.userAgent' },
      os: { '@path': '$.context.os.name' },
      osVersion: { '@path': '$.context.os.version' },
      deviceType: { '@path': '$.context.device.type' },
      deviceVendor: { '@path': '$.context.device.manufacturer' },
      deviceModel: { '@path': '$.context.device.model' },
      timeZone: { '@path': '$.context.timezone' },
    },
    defaultObjectUI: 'keyvalue',
  },
  anonymous_id: {
    type: 'string',
    allowNull: true,
    required: false,
    description: 'User Anonymous id',
    label: 'Anonymous ID',
    default: { '@path': '$.anonymousId' }
  },
  event_id: {
    type: 'string',
    required: false,
    description: 'The ID of the event.',
    label: 'Event ID',
    default: { '@path': '$.messageId' }
  },
  url: {
    type: 'string',
    required: false,
    description: 'The URL of the page where the event occurred.',
    label: 'URL',
    default: { '@path': '$.context.page.url' }
  },
  referer: {
    type: 'string',
    required: false,
    description: 'The referrer of the page where the event occurred.',
    label: 'Referrer',
    default: { '@path': '$.context.page.referrer' }
  },
  user_language: {
    type: 'string',
    required: false,
    description: 'The language of the browser.',
    label: 'User Language',
    default: { '@path': '$.context.locale' }
  },
  utc_time: {
    type: 'string',
    required: true,
    description: 'The time of the event in UTC.',
    label: 'UTC Time',
    format: 'date-time',
    default: { '@path': '$.timestamp' }
  },
  utm: {
    type: 'object',
    required: false,
    description: 'Information about the UTM parameters.',
    label: 'UTM',
    properties: {
      source: {
        label: 'Source',
        description: 'The source of the campaign.',
        type: 'string'
      },
      medium: {
        label: 'Medium',
        description: 'The medium of the campaign.',
        type: 'string'
      },
      name: {
        label: 'Name',
        description: 'The name of the campaign.',
        type: 'string'
      },
      term: {
        label: 'Term',
        description: 'The term of the campaign.',
        type: 'string'
      },
      content: {
        label: 'Content',
        description: 'The content of the campaign.',
        type: 'string'
      }
    },
    default: {
      source: { '@path': '$.context.campaign.source' },
      medium: { '@path': '$.context.campaign.medium' },
      name: { '@path': '$.context.campaign.name' },
      term: { '@path': '$.context.campaign.term' },
      content: { '@path': '$.context.campaign.content' }
    }
  },
  screen: {
    type: 'object',
    required: false,
    description: 'Information about the screen.',
    label: 'Screen',
    properties: {
      height: {
        label: 'Height',
        description: 'The height of the screen.',
        type: 'integer'
      },
      width: {
        label: 'Width',
        description: 'The width of the screen.',
        type: 'integer'
      },
      density: {
        label: 'Density',
        description: 'The density of the screen.',
        type: 'number'
      }
    },
    default: {
      height: { '@path': '$.context.screen.height' },
      width: { '@path': '$.context.screen.width' },
      density: { '@path': '$.context.screen.density' }
    }
  },
  timezone: {
    type: 'string',
    required: false,
    description: 'The timezone of the browser.',
    label: 'Timezone',
    default: {
      '@if': {
        exists: { '@path': '$.context.timezone' },
        then: { '@path': '$.context.timezone' },
        else: { '@path': '$.properties.timezone' }
      }
    }
  },
  source_ip: {
    type: 'string',
    required: false,
    description: 'The IP address of the user.',
    label: 'IP Address',
    default: { '@path': '$.context.ip' }
  }
}
