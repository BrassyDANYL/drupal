<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/simple_mobile_menu/templates/menu--simple-mobile-menu.html.twig */
class __TwigTemplate_b1063848ce2f4e22fc0570445d6d1208d4197bb94c60732bb037f2f9bdae1e3a extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 23
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 24
        echo "
";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 29, $context, $this->getSourceContext()));
        echo "

";
    }

    // line 31
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            // line 32
            echo "  ";
            $macros["menus"] = $this;
            // line 33
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 34
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    // line 35
                    echo "      <ul";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "main-mobile-menu"], "method", false, false, true, 35), 35, $this->source), "html", null, true);
                    echo ">
    ";
                } else {
                    // line 37
                    echo "      <ul class=\"submenu\">
    ";
                }
                // line 39
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                $context['loop'] = [
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                ];
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 40
                    echo "       ";
                    $context["menu_attributes"] = $this->extensions['Drupal\menus_attribute\Template\TwigExtension']->menusAttribute($this->sandbox->ensureToStringAllowed((($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = twig_get_array_keys_filter($this->sandbox->ensureToStringAllowed(($context["items"] ?? null), 40, $this->source))) && is_array($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4) || $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 instanceof ArrayAccess ? ($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4[twig_get_attribute($this->env, $this->source, $context["loop"], "index0", [], "any", false, false, true, 40)] ?? null) : null), 40, $this->source));
                    // line 41
                    echo "      ";
                    // line 42
                    $context["classes"] = [0 => "menu-item", 1 => ((twig_get_attribute($this->env, $this->source,                     // line 44
$context["item"], "is_expanded", [], "any", false, false, true, 44)) ? ("menu-item--expanded") : ("")), 2 => ((twig_get_attribute($this->env, $this->source,                     // line 45
$context["item"], "is_collapsed", [], "any", false, false, true, 45)) ? ("menu-item--collapsed") : ("")), 3 => ((twig_get_attribute($this->env, $this->source,                     // line 46
$context["item"], "in_active_trail", [], "any", false, false, true, 46)) ? ("menu-item--active-trail") : ("")), 4 => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,                     // line 47
($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 47), "class", [], "any", false, false, true, 47)) ? (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 47), "class", [], "any", false, false, true, 47)) : (""))];
                    // line 50
                    echo "      <li";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 50), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 50), 50, $this->source), "html", null, true);
                    echo "  
        ";
                    // line 51
                    if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 51), "id", [], "any", false, false, true, 51)) {
                        // line 52
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 52), "setAttribute", [0 => "id", 1 => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 52), "id", [], "any", false, false, true, 52)], "method", false, false, true, 52), 52, $this->source), "html", null, true);
                        echo "
        ";
                    }
                    // line 54
                    echo "        ";
                    if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 54), "style", [], "any", false, false, true, 54)) {
                        // line 55
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 55), "setAttribute", [0 => "style", 1 => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 55), "style", [], "any", false, false, true, 55)], "method", false, false, true, 55), 55, $this->source), "html", null, true);
                        echo "
        ";
                    }
                    // line 56
                    echo " >

        ";
                    // line 58
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 58), 58, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 58), 58, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["menu_attributes"] ?? null), "link", [], "any", false, false, true, 58), 58, $this->source)), "html", null, true);
                    echo "
        ";
                    // line 59
                    if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 59)) {
                        // line 60
                        echo "           ";
                        // line 61
                        $context["classes"] = [0 => "sub-menu-item", 1 => ((twig_get_attribute($this->env, $this->source,                         // line 63
$context["item"], "in_active_trail", [], "any", false, false, true, 63)) ? ("menu-item--active-trail") : ("")), 2 => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,                         // line 64
($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 64), "class", [], "any", false, false, true, 64)) ? (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["menu_attributes"] ?? null), "item", [], "any", false, false, true, 64), "class", [], "any", false, false, true, 64)) : (""))];
                        // line 67
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 67), twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 67), (($context["menu_level"] ?? null) + 1)], 67, $context, $this->getSourceContext()));
                        echo "
        ";
                    }
                    // line 69
                    echo "      </li>
    ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 71
                echo "    </ul>
  ";
            }

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/simple_mobile_menu/templates/menu--simple-mobile-menu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  173 => 71,  158 => 69,  152 => 67,  150 => 64,  149 => 63,  148 => 61,  146 => 60,  144 => 59,  140 => 58,  136 => 56,  130 => 55,  127 => 54,  121 => 52,  119 => 51,  114 => 50,  112 => 47,  111 => 46,  110 => 45,  109 => 44,  108 => 42,  106 => 41,  103 => 40,  85 => 39,  81 => 37,  75 => 35,  72 => 34,  69 => 33,  66 => 32,  51 => 31,  44 => 29,  41 => 24,  39 => 23,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to display a simple_mobile-menu menu.
 *
 * Available variables:
 * - menu_name: The machine name of the menu.
 * - items: A nested list of menu items. Each menu item contains:
 *   - attributes: HTML attributes for the menu item.
 *   - below: The menu item child items.
 *   - title: The menu link title.
 *   - url: The menu link url, instance of \\Drupal\\Core\\Url
 *   - localized_options: Menu link localized options.
 *   - is_expanded: TRUE if the link has visible children within the current
 *     menu tree.
 *   - is_collapsed: TRUE if the link has children within the current menu tree
 *     that are not currently visible.
 *   - in_active_trail: TRUE if the link is in the active trail.
 *
 * @ingroup themeable
 */
#}
{% import _self as menus %}

{#
  We call a macro which calls itself to render the full tree.
  @see http://twig.sensiolabs.org/doc/tags/macro.html
#}
{{ menus.menu_links(items, attributes, 0) }}

{% macro menu_links(items, attributes, menu_level) %}
  {% import _self as menus %}
  {% if items %}
    {% if menu_level == 0 %}
      <ul{{ attributes.addClass('main-mobile-menu') }}>
    {% else %}
      <ul class=\"submenu\">
    {% endif %}
    {% for item in items %}
       {% set menu_attributes = menus_attribute(items|keys[loop.index0]) %}
      {%
        set classes = [
          'menu-item',
          item.is_expanded ? 'menu-item--expanded',
          item.is_collapsed ? 'menu-item--collapsed',
          item.in_active_trail ? 'menu-item--active-trail',
          menu_attributes.item.class ? menu_attributes.item.class
        ]
      %}
      <li{{ item.attributes.addClass(classes) }}  
        {% if menu_attributes.item.id %}
          {{ item.attributes.setAttribute('id', menu_attributes.item.id) }}
        {% endif %}
        {% if menu_attributes.item.style %}
          {{ item.attributes.setAttribute('style', menu_attributes.item.style) }}
        {% endif %} >

        {{ link(item.title, item.url, menu_attributes.link) }}
        {% if item.below %}
           {%
              set classes = [
                 'sub-menu-item',
                  item.in_active_trail ? 'menu-item--active-trail',
                  menu_attributes.item.class ? menu_attributes.item.class
                ]
          %}
          {{ menus.menu_links(item.below, attributes.addClass(classes), menu_level + 1) }}
        {% endif %}
      </li>
    {% endfor %}
    </ul>
  {% endif %}
{% endmacro %}", "modules/contrib/simple_mobile_menu/templates/menu--simple-mobile-menu.html.twig", "/var/www/exam/web/modules/contrib/simple_mobile_menu/templates/menu--simple-mobile-menu.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 23, "macro" => 31, "if" => 33, "for" => 39, "set" => 40);
        static $filters = array("escape" => 35, "keys" => 40);
        static $functions = array("menus_attribute" => 40, "link" => 58);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape', 'keys'],
                ['menus_attribute', 'link']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
