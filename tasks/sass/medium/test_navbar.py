from pathlib import Path
import re
import unittest


STYLESHEET = Path(__file__).with_name("styles.scss").read_text(encoding="utf-8")


class NavbarStylesTest(unittest.TestCase):
    def test_navbar_uses_theme_colors_and_mobile_layout(self):
        self.assertRegex(
            STYLESHEET,
            r"nav\s*\{[^}]*background-color:\s*\$primary-color\s*;[^}]*display:\s*flex",
            "navbar must use $primary-color and a desktop flex layout",
        )
        self.assertRegex(
            STYLESHEET,
            r"\.nav-links\s*\{[\s\S]*?&:hover\s*\{[^}]*color:\s*\$secondary-color\s*;",
            "navbar link hover must use $secondary-color",
        )
        self.assertRegex(
            STYLESHEET,
            r"@media[^\{]*\{[\s\S]*?nav\s*\{[^}]*flex-direction:\s*column\s*;",
            "navbar must stack vertically in a mobile media query",
        )


if __name__ == "__main__":
    unittest.main()
