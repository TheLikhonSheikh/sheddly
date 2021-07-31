import { Telegraf, Context } from 'telegraf'
import { strings } from '@helpers/strings'
import { checkLock } from '@middlewares/checkLock'
import { clarifyIfPrivateMessages } from '@helpers/clarifyIfPrivateMessages'

export function setup1inchInfo(bot: Telegraf<Context>) {
  bot.command(['1inch'], sendInfo)
}

export function sendInfo(ctx: Context) {
  if (ctx.update.message?.date) {
    console.log(
      'Replying to 1inch',
      Date.now() / 1000 - ctx.update.message?.date
    )
  }

  const aboutOneInch = strings(ctx.dbchat, 'oneInchInfo');
  const link =
      '[LetStudy](https://letstudy.io/?utm_source=shieldy_en&utm_medium=cpc&utm_campaign=powered)';

  return ctx.replyWithMarkdown(`${aboutOneInch}\n\n${link}`, {
    disable_web_page_preview: false,
  })
}
