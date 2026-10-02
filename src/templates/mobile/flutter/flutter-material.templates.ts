import { Template } from "../../../types/template.interface.js";

export default [
  {
    title: 'Create icon button with splash',
    content: `
           SizedBox(
                    width: 28,
                    height: 28,
                    child: Stack(
                      children: [
                        SvgPicture.asset(
                          'assets/images/icons/ButtonMore.svg',
                          width: 28,
                          height: 28,
                        ),
                        Material(
                          type: MaterialType.transparency,
                          child: InkWell(
                            onTap: onDetailsTap,
                            customBorder: const CircleBorder(),
                            splashColor: const Color(0xFF0C4684).withValues(alpha: 0.35),
                            highlightColor: const Color(0xFF0C4684).withValues(alpha: 0.12),
                            child: const SizedBox(width: 28, height: 28),
                          ),
                        ),
                      ],
                    ),
                  )
`,
    syntaxHighlightLanguage: 'dart',
  },
] as Template[];
