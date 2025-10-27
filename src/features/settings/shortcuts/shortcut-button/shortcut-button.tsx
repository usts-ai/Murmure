import { Button } from '@/components/button';
import { ResetButton } from '@/components/reset-button';
import { RenderKeys } from '../../../../components/render-keys';
import { Pencil } from 'lucide-react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from '@/components/dialog';
import { Typography } from '@/components/typography';
import { useShortcutInteractions } from './hooks/use-shortcut-interactions';

export const ShortcutButton = ({
    keyName,
    shortcut,
    saveShortcut,
    resetShortcut,
}: {
    keyName: string;
    shortcut: string;
    saveShortcut: (shortcut: string) => void;
    resetShortcut: () => void;
}) => {
    const { binding, isRecording, resetRecording, startRecording } =
        useShortcutInteractions(shortcut, saveShortcut, resetShortcut);

    let label: React.ReactNode;
    if (isRecording && binding.length > 0) {
        label = <RenderKeys keyString={binding} />;
    } else if (isRecording) {
        label = <span className="text-zinc-500">Press keys...</span>;
    } else {
        label = <RenderKeys keyString={shortcut} />;
    }

    return (
        <div className="flex flex-row gap-1">
            <Dialog open={isRecording} onOpenChange={startRecording}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="px-2">
                        <Pencil />
                        {label}
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 text-zinc-100 border border-zinc-800">
                    <div className="flex flex-col gap-4 text-center">
                        <DialogTitle>
                            <Typography.Title>{keyName}</Typography.Title>
                        </DialogTitle>
                        <DialogDescription className="flex flex-col gap-4 text-zinc-400">
                            <Typography.Paragraph>
                                <span className="font-bold text-zinc-200">
                                    Enter
                                </span>{' '}
                                to validate or{' '}
                                <span className="font-bold text-zinc-200">
                                    Escape
                                </span>{' '}
                                to cancel.
                            </Typography.Paragraph>
                            <div className="px-2 w-full bg-zinc-800 border border-zinc-700 rounded-md py-2">
                                {label}
                            </div>
                        </DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
            <ResetButton onClick={resetRecording} />
        </div>
    );
};
