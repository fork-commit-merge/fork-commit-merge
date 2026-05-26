<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['title', 'markdown']));

foreach ($attributes->all() as $__key => $__value) {
    if (in_array($__key, $__propNames)) {
        $$__key = $$__key ?? $__value;
    } else {
        $__newAttributes[$__key] = $__value;
    }
}

$attributes = new \Illuminate\View\ComponentAttributeBag($__newAttributes);

unset($__propNames);
unset($__newAttributes);

foreach (array_filter((['title', 'markdown']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<script>
    const markdown = <?php echo e(Illuminate\Support\Js::from($markdown)); ?>

</script>

<div
    class="flex items-center justify-between"
    x-data="{
        copied: false,
        async copyToClipboard() {
            try {
                await window.copyToClipboard(markdown);
                this.copied = true;
                setTimeout(() => { this.copied = false }, 3000);
            } catch (err) {
                console.error('Failed to copy the markdown: ', err);
            }
        }
    }"
>
    <div class="flex items-center gap-2 h-[56px]">
        <div class="w-[18px] h-[18px] flex items-center justify-center bg-rose-500 rounded-md">
            <svg width="2" height="10" class="text-white" viewBox="0 0 2 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00006 6.3188C1.41416 6.3188 1.75006 5.98295 1.75006 5.56885V1.43115C1.75006 1.01705 1.41416 0.681152 1.00006 0.681152C0.585961 0.681152 0.250061 1.01705 0.250061 1.43115V5.56885C0.250061 5.98295 0.585961 6.3188 1.00006 6.3188Z" fill="currentColor" />
                <path d="M1.00006 9.41699C1.55235 9.41699 2.00007 8.96929 2.00007 8.41699C2.00007 7.86469 1.55235 7.41699 1.00006 7.41699C0.447781 7.41699 6.10352e-05 7.86469 6.10352e-05 8.41699C6.10352e-05 8.96929 0.447781 9.41699 1.00006 9.41699Z" fill="currentColor "/>
            </svg>
        </div>
        <div class="font-medium text-sm text-neutral-900 dark:text-white">
            <?php echo e($title); ?>

        </div>
    </div>

    <button
        x-cloak
        class="<?php echo \Illuminate\Support\Arr::toCssClasses([
            "text-sm rounded-md border px-3 h-8 flex items-center gap-2 transition-colors duration-200 ease-in-out cursor-pointer shadow-xs",
            "text-neutral-600 dark:text-neutral-400 bg-white/5 border-neutral-200 hover:bg-neutral-100 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10",
        ]); ?>"
        @click="copyToClipboard()"
    >
        <?php if (isset($component)) { $__componentOriginal8894ff2e6e6bd543865d608162806b35 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal8894ff2e6e6bd543865d608162806b35 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.copy','data' => ['class' => 'w-3 h-3','xShow' => '!copied']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.copy'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3','x-show' => '!copied']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal8894ff2e6e6bd543865d608162806b35)): ?>
<?php $attributes = $__attributesOriginal8894ff2e6e6bd543865d608162806b35; ?>
<?php unset($__attributesOriginal8894ff2e6e6bd543865d608162806b35); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal8894ff2e6e6bd543865d608162806b35)): ?>
<?php $component = $__componentOriginal8894ff2e6e6bd543865d608162806b35; ?>
<?php unset($__componentOriginal8894ff2e6e6bd543865d608162806b35); ?>
<?php endif; ?>
        <?php if (isset($component)) { $__componentOriginal394a4f59b8774713925fcf456ba90b57 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal394a4f59b8774713925fcf456ba90b57 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.check','data' => ['class' => 'w-3 h-3 text-emerald-500','xShow' => 'copied']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.check'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3 text-emerald-500','x-show' => 'copied']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal394a4f59b8774713925fcf456ba90b57)): ?>
<?php $attributes = $__attributesOriginal394a4f59b8774713925fcf456ba90b57; ?>
<?php unset($__attributesOriginal394a4f59b8774713925fcf456ba90b57); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal394a4f59b8774713925fcf456ba90b57)): ?>
<?php $component = $__componentOriginal394a4f59b8774713925fcf456ba90b57; ?>
<?php unset($__componentOriginal394a4f59b8774713925fcf456ba90b57); ?>
<?php endif; ?>
        <span x-text="copied ? 'Copied to clipboard' : 'Copy as Markdown'"></span>
    </button>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/topbar.blade.php ENDPATH**/ ?>