import { BardBot } from './bard'
import { BingWebBot } from './bing'
import { ChatGPTBot } from './chatgpt'
import { ClaudeBot } from './claude'
import { LMSYSBot } from './lmsys'
import { XunfeiBot } from './xunfei'

export type BotId = 'chatgpt' | 'bard' | 'claude' | 'vicuna' | 'bing' | 'xunfei' | 'alpaca' | 'chatglm'

export function createBotInstance(botId: BotId) {
  switch (botId) {
    case 'chatgpt':
      return new ChatGPTBot()
    case 'bard':
      return new BardBot()
    case 'claude':
      return new ClaudeBot()
    case 'vicuna':
      return new LMSYSBot('vicuna-13b')
    case 'bing':
      return new BingWebBot()
    case 'xunfei':
      return new XunfeiBot()
    case 'alpaca':
      return new LMSYSBot('alpaca-13b')
    case 'chatglm':
      return new LMSYSBot('chatglm-6b')
  }
}

export type BotInstance = ReturnType<typeof createBotInstance>
