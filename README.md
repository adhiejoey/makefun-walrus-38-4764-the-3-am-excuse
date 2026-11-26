# The 3 AM Excuse

[![make.fun · u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/adhiejoey/makefun-walrus-38-4764-the-3-am-excuse/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/adhiejoey/makefun-walrus-38-4764-the-3-am-excuse/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

One line in the voice of a hardware wallet that refuses to sign at 3 AM: it
turns the late-night signing request into a booty call, pointing out that its
owner only ever plugs it in at 3 AM when lonely and leveraged, and declines
with the dignity of a device that knows exactly what kind of wallet it is not.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the single
excuse line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`),
refusing to write anything that would fail the 1–200 character gate.

## License

MIT — see LICENSE.
